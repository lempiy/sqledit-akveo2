const sqlTypes = {
    'BIT': 'BIT',
    'INTEGER': 'INTEGER',
    'INT': 'INT',
    'TEXT': 'TEXT',
    'DATETIME': 'DATETIME',
    'FLOAT': 'FLOAT',
    'NVARCHAR(N)': 'NVARCHAR(N)',
    'NUMERIC': 'NUMERIC',
    'BOOLEAN': 'BOOLEAN',
    'REAL': 'REAL',
    'BIGINT': 'BIGINT',
    'MONEY': 'MONEY',
    'SMALLINT': 'SMALLINT',
    'CHAR': 'CHAR',
    'TEXT PINCODE TEXT': 'TEXT PINCODE TEXT',
};

const sqlConstraints = {
    notNull: 'notnull',
    default: 'dflt_value',
    primaryKey: 'pk',
};

const moneyExp = new RegExp(
    `^[\\u0024\\u00A2-\\u00A5\\u09F2-\\u09F3\\u0E3f\\u17DB\\u20A0-\\u20B1\\uFE69\\uFF04-\\uFFE6]?\
    \\d+(\\d+(,(?=\\d))?\\d*)+(\\\.(?=\\d{1,2})\\d+)?$`,
);

const handleValidation = (isOk, type, value) => {
    if (isOk) {
        return null;
    } else {
        return `Value "${value}" is not assignable to type "${type}"`;
    }
};

export const validators = {
    validateRow: (rowValue, rowType) => {
        // NO DATA ABOUT NOT NULL YET
        if (rowValue === 'NULL' || !rowValue) {
            return handleValidation(
                true,
                rowType,
                rowValue,
            );
        }
        switch (rowType.toUpperCase()) {
            case 'BIT':
            case 'BOOLEAN': 
                return handleValidation(
                    rowValue === 'true' || rowValue === 'false',
                    rowType,
                    rowValue,
                );
            case 'DATETIME':
                return handleValidation(
                    /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}(\.\d+)?$/.test(rowValue),
                    rowType,
                    rowValue,
                );
            case 'INTEGER':
            case 'INT':
            case 'FLOAT':
            case 'NUMERIC':
            case 'REAL':
            case 'BIGINT':
                return handleValidation(
                    !isNaN(+rowValue),
                    rowType,
                    rowValue,
                );
            case 'SMALLINT':
                return handleValidation(
                    !isNaN(+rowValue) && +rowValue >= (-2 << 14) && +rowValue < (2 << 14),
                    rowType,
                    rowValue,
                );
            case 'MONEY':
                return handleValidation(
                    moneyExp.test(rowValue),
                    rowType,
                    rowValue,
                );
            default:
                
                const match = /^NVARCHAR\s?\((\d+)\)/g.exec(rowType.toUpperCase());
                
                let isOk = true;
                if (match) {
                    isOk = +match[1] > rowValue.length;
                }
                return handleValidation(
                    isOk,
                    rowType,
                    rowValue,
                );
        }
    },
    validateColumn: (column) => {
        const result = [];
        if (column.dflt_value) {
            const err = validators.validateRow(column.dflt_value, column.type);
            if (err) {
                result.push(err);
            } 
        }
        if (!column.type) {
            result.push('Column type cannot be empty');
        }
        if (!column.name) {
            result.push('Column name cannot be empty');
        }
        return result;
    },
    validateConstraints: (value: any, allValues: any[], rowDef: any) => {
        if (rowDef.pk && value) {
            const isOK = allValues.every(val => {
                return String(val) !== String(value);
            });
            if (!isOK) {
                return `Primary key ${value} should be unique.`;
            }
        }

        if (rowDef.notnull) {
            if (rowDef.dflt_value) {
                return null;
            }
            if (value === '' || String(value).toUpperCase() === 'NULL') {
                return `Value ${value} cannot be set to NULL.`;
            }
        }
        
    },
};
