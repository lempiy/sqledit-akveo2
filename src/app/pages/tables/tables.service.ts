import {Injectable} from '@angular/core';

@Injectable()
export class TablesService {
    selectedTable = {
        name: 'user',
        columns: [
            {
                name: 'id',
                type: 'INTEGER',
            },
            {
                name: 'username',
                type: 'TEXT',
            },
            {
                name: 'email',
                type: 'TEXT',
            },
            {
                name: 'created_at',
                type: 'DATE',
            },
        ],
        indexes: [{
            name: 'index_username',
            unique: false,
            partial: false,
            columns: [
                {
                    name: 'username',
                },
                {
                    name: 'created_at',
                },
            ],
        }],
        views: [{
            name: 'Old Users',
            sql: `CREATE VIEW [Old Users] AS
                SELECT id, username
                FROM user
                WHERE created_at >= #1/20/2015#`,
        }],
    };


  allTableData = [
    {
        "name": "AggItems",
        "columns": [
            {
                "name": "ItemNo",
                "type": "nvarchar(50)"
            },
            {
                "name": "Description",
                "type": "nvarchar(50)"
            },
            {
                "name": "Enabled",
                "type": "bit"
            },
            {
                "name": "SortOrder",
                "type": "integer"
            },
            {
                "name": "UpdateStamp",
                "type": "int"
            },
            {
                "name": "Template",
                "type": "TEXT"
            },
            {
                "name": "CancelationDate",
                "type": "TEXT"
            },
            {
                "name": "Language",
                "type": "NVARCHAR (30)"
            }
        ],
        "indexes": [
            {
                "name": "ItemNo",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "ItemNo"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "AlgoKpiAvgs",
        "columns": [
            {
                "name": "RecId",
                "type": "integer"
            },
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "DeliveredOrders",
                "type": "integer"
            },
            {
                "name": "Hour",
                "type": "datetime"
            },
            {
                "name": "AvgAvailableCarriers",
                "type": "float"
            },
            {
                "name": "CP",
                "type": "float"
            },
            {
                "name": "AvgKpiTimeToMakeline",
                "type": "float"
            },
            {
                "name": "AvgKpiMakeLineTime",
                "type": "float"
            },
            {
                "name": "AvgKpiHoldTime",
                "type": "float"
            },
            {
                "name": "AvgKpiOutsideOvenTime",
                "type": "float"
            },
            {
                "name": "AvgKpiPreparationTime",
                "type": "float"
            },
            {
                "name": "AvgKpiDrivingTime",
                "type": "float"
            },
            {
                "name": "AvgDeliveryTime",
                "type": "float"
            },
            {
                "name": "InsertToOvenDeviation",
                "type": "float"
            },
            {
                "name": "CountFlowAlert_1",
                "type": "integer"
            },
            {
                "name": "CountFlowAlert_2",
                "type": "integer"
            },
            {
                "name": "CountFlowAlert_4",
                "type": "integer"
            },
            {
                "name": "RecordInsertTime",
                "type": "datetime"
            },
            {
                "name": "CancelationTime",
                "type": "datetime"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            },
            {
                "name": "AvgKpiPackingTime",
                "type": "integer"
            },
            {
                "name": "AvgDeviationFromDefinedPackTime",
                "type": "integer"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "AllowedOrigins",
        "columns": [
            {
                "name": "RecId",
                "type": "INTEGER"
            },
            {
                "name": "Origin",
                "type": "NVARCHAR"
            },
            {
                "name": "Handlers",
                "type": "TEXT"
            },
            {
                "name": "description",
                "type": "NVARCHAR"
            },
            {
                "name": "RecordInsertTime",
                "type": "DATETIME"
            },
            {
                "name": "CancelationTime",
                "type": "DATETIME"
            },
            {
                "name": "AllowedUserLevels",
                "type": "INTEGER"
            },
            {
                "name": "UpdateStamp",
                "type": "INTEGER"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "Attendance",
        "columns": [
            {
                "name": "RecId",
                "type": "integer"
            },
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "EmployeeID",
                "type": "nvarchar (10)"
            },
            {
                "name": "Date",
                "type": "datetime"
            },
            {
                "name": "ShiftSequence",
                "type": "integer"
            },
            {
                "name": "CheckIn",
                "type": "datetime"
            },
            {
                "name": "CheckOut",
                "type": "datetime"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            }
        ],
        "indexes": [
            {
                "name": "Attendance_RecId",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "RecId"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "Bookmarks",
        "columns": [
            {
                "name": "SiteId",
                "type": "nvarchar(50)"
            },
            {
                "name": "Value",
                "type": "nvarchar(255)"
            },
            {
                "name": "Step",
                "type": "nvarchar(50)"
            },
            {
                "name": "Field",
                "type": "nvarchar(50)"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "CameraItems",
        "columns": [
            {
                "name": "RecId",
                "type": "INTEGER"
            },
            {
                "name": "ItemNo",
                "type": "TEXT"
            },
            {
                "name": "Description",
                "type": "TEXT"
            },
            {
                "name": "ItemType",
                "type": "TEXT"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "CarrierActivities",
        "columns": [
            {
                "name": "RecId",
                "type": "integer"
            },
            {
                "name": "CarrierId",
                "type": "nvarchar (30)"
            },
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "ActionType",
                "type": "integer"
            },
            {
                "name": "Reference",
                "type": "nvarchar (50)"
            },
            {
                "name": "Lat",
                "type": "float"
            },
            {
                "name": "Lng",
                "type": "float"
            },
            {
                "name": "RecordInsertTime",
                "type": "datetime"
            },
            {
                "name": "EventTime",
                "type": "datetime"
            },
            {
                "name": "TimeSent",
                "type": "datetime"
            },
            {
                "name": "SequelEvent",
                "type": "integer"
            },
            {
                "name": "EventData",
                "type": "nvarchar (4000)"
            },
            {
                "name": "UpdateStamp",
                "type": "int"
            },
            {
                "name": "LastCarrierActivityForMileage",
                "type": "integer"
            }
        ],
        "indexes": [
            {
                "name": "Store+Sent+Sequel+ActionType+EventTime",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "TimeSent"
                    },
                    {
                        "name": "SequelEvent"
                    },
                    {
                        "name": "ActionType"
                    },
                    {
                        "name": "EventTime"
                    }
                ]
            },
            {
                "name": "Store+Sent+Sequel+ActionType",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "TimeSent"
                    },
                    {
                        "name": "SequelEvent"
                    },
                    {
                        "name": "ActionType"
                    }
                ]
            },
            {
                "name": "Carrieractivities_RecId",
                "unique": true,
                "partial": false,
                "columns": [
                    {
                        "name": "RecId"
                    }
                ]
            },
            {
                "name": "CA-Store+Carrier",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "CarrierId"
                    },
                    {
                        "name": "StoreNo"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "CarrierAlerts",
        "columns": [
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "CarrierId",
                "type": "nvarchar(50)"
            },
            {
                "name": "VehicleId",
                "type": "nvarchar(50)"
            },
            {
                "name": "AlertId",
                "type": "integer"
            },
            {
                "name": "AlertType",
                "type": "integer"
            },
            {
                "name": "EventType",
                "type": "integer"
            },
            {
                "name": "EventTime",
                "type": "datetime"
            },
            {
                "name": "Lat",
                "type": "numeric"
            },
            {
                "name": "Lng",
                "type": "numeric"
            },
            {
                "name": "RecordInsertTime",
                "type": "datetime"
            },
            {
                "name": "ResponseTime",
                "type": "datetime"
            },
            {
                "name": "AlertReason",
                "type": "nvarchar(256)"
            },
            {
                "name": "UpdateStamp",
                "type": "int"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "Carriers",
        "columns": [
            {
                "name": "CarrierId",
                "type": "nvarchar (50)"
            },
            {
                "name": "FirstName",
                "type": "nvarchar (50)"
            },
            {
                "name": "LastName",
                "type": "nvarchar (50)"
            },
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "Active",
                "type": "bit"
            },
            {
                "name": "Role",
                "type": "integer"
            },
            {
                "name": "MobilePhone",
                "type": "nvarchar (50)"
            },
            {
                "name": "Password",
                "type": "nvarchar (50)"
            },
            {
                "name": "DispatchAlert",
                "type": "nvarchar (150)"
            },
            {
                "name": "DisplayName",
                "type": "nvarchar (50)"
            },
            {
                "name": "UpdateStamp",
                "type": "int"
            },
            {
                "name": "DefaultLanguage",
                "type": "TEXT"
            }
        ],
        "indexes": [
            {
                "name": "Store+Carrier+Active",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "CarrierId"
                    },
                    {
                        "name": "Active"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "CarriersExtraData",
        "columns": [
            {
                "name": "CarrierId",
                "type": "nvarchar (50)"
            },
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "Status",
                "type": "integer"
            },
            {
                "name": "Lat",
                "type": "float"
            },
            {
                "name": "Lng",
                "type": "float"
            },
            {
                "name": "Vehicle_Id",
                "type": "nvarchar (50)"
            },
            {
                "name": "EstimatedReturnTime",
                "type": "datetime"
            },
            {
                "name": "LastGpsUpdate",
                "type": "datetime"
            },
            {
                "name": "ManualDecissionTime",
                "type": "datetime"
            },
            {
                "name": "AlertStatus",
                "type": "integer"
            },
            {
                "name": "ManualEstimatedReturnTime",
                "type": "datetime"
            },
            {
                "name": "LastRoute",
                "type": "integer"
            },
            {
                "name": "UpdateStamp",
                "type": "int"
            },
            {
                "name": "WaitingTime",
                "type": "DATETIME"
            },
            {
                "name": "LastCarrierActivityForMileage",
                "type": "Integer"
            }
        ],
        "indexes": [
            {
                "name": "CarriersExtraData_Id+Store",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "CarrierId"
                    },
                    {
                        "name": "StoreNo"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "DropDownList",
        "columns": [
            {
                "name": "Page",
                "type": "TEXT"
            },
            {
                "name": "ControlType",
                "type": "TEXT"
            },
            {
                "name": "ConID",
                "type": "TEXT"
            },
            {
                "name": "Query",
                "type": "TEXT"
            },
            {
                "name": "CancelationDate",
                "type": "TEXT"
            },
            {
                "name": "UpdateStamp",
                "type": "INTEGER"
            },
            {
                "name": "AllowMultiSelect",
                "type": "BOOLEAN"
            },
            {
                "name": "DefaultVal",
                "type": "TEXT"
            },
            {
                "name": "EnsureCommas",
                "type": "INTEGER"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "EmployeesScheduling",
        "columns": [
            {
                "name": "RecId",
                "type": "INTEGER"
            },
            {
                "name": "StoreNo",
                "type": "INTEGER"
            },
            {
                "name": "EmployeeID",
                "type": "Text"
            },
            {
                "name": "SchedulingId",
                "type": "Text"
            },
            {
                "name": "Role",
                "type": "INTEGER"
            },
            {
                "name": "Date",
                "type": "datetime"
            },
            {
                "name": "ExpectedIn",
                "type": "datetime"
            },
            {
                "name": "ExpectedOut",
                "type": "datetime"
            },
            {
                "name": "RecordType",
                "type": "INTEGER"
            },
            {
                "name": "UpdateStamp",
                "type": "INTEGER"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            },
            {
                "name": "Used",
                "type": "datetime"
            }
        ],
        "indexes": [
            {
                "name": "Store+Employee+Scheduling",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "EmployeeID"
                    },
                    {
                        "name": "SchedulingId"
                    }
                ]
            },
            {
                "name": "Store+Cancelation+used",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "CancelationDate"
                    },
                    {
                        "name": "Used"
                    }
                ]
            },
            {
                "name": "Store+Cancelation",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "CancelationDate"
                    }
                ]
            },
            {
                "name": "EmployeesScheduling_Recid",
                "unique": true,
                "partial": false,
                "columns": [
                    {
                        "name": "RecId"
                    }
                ]
            },
            {
                "name": "Cancelation+ExpectedIn",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "CancelationDate"
                    },
                    {
                        "name": "ExpectedIn"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "ItemFlows",
        "columns": [
            {
                "name": "FlowNo",
                "type": "INTEGER"
            },
            {
                "name": "PreparationSeconds",
                "type": "INTEGER"
            },
            {
                "name": "PrepareKds",
                "type": "NVARCHAR (50)"
            },
            {
                "name": "CookSeconds",
                "type": "INTEGER"
            },
            {
                "name": "CookKds",
                "type": "NVARCHAR (50)"
            },
            {
                "name": "PackSeconds",
                "type": "INTEGER"
            },
            {
                "name": "PackKds",
                "type": "NVARCHAR (50)"
            },
            {
                "name": "MakePrePrinter",
                "type": "TEXT"
            },
            {
                "name": "MakePostPrinter",
                "type": "TEXT"
            },
            {
                "name": "PackPostPrinter",
                "type": "TEXT"
            },
            {
                "name": "Description",
                "type": "TEXT"
            },
            {
                "name": "PackSortOrder",
                "type": "INTEGER"
            },
            {
                "name": "OnlyForSaleTypes",
                "type": "NVARCHAR (150)"
            },
            {
                "name": "AttachedToFlow",
                "type": "INTEGER"
            },
            {
                "name": "ItemAvgWaitForCookSeconds",
                "type": "INTEGER"
            },
            {
                "name": "UpdateStamp",
                "type": "INTEGER"
            },
            {
                "name": "CancelationDate",
                "type": "DATETIME"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "ItemTranslations",
        "columns": [
            {
                "name": "ItemNo",
                "type": "TEXT"
            },
            {
                "name": "Language",
                "type": "TEXT"
            },
            {
                "name": "Description",
                "type": "TEXT"
            },
            {
                "name": "Ingredients",
                "type": "TEXT"
            },
            {
                "name": "ReportDescription",
                "type": "TEXT"
            },
            {
                "name": "CancelationDate",
                "type": "DATETIME"
            },
            {
                "name": "UpdateStamp",
                "type": "INTEGER"
            }
        ],
        "indexes": [
            {
                "name": "ItemNo+Lang",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "ItemNo"
                    },
                    {
                        "name": "Language"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "Items",
        "columns": [
            {
                "name": "ItemNo",
                "type": "nvarchar(50)"
            },
            {
                "name": "FlowNo",
                "type": "integer"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            },
            {
                "name": "Description",
                "type": "nvarchar(100)"
            },
            {
                "name": "Ingredients",
                "type": "nVarChar(4000)"
            }
        ],
        "indexes": [
            {
                "name": "Item",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "ItemNo"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "Languages",
        "columns": [
            {
                "name": "LanguageCode",
                "type": "NVARCHAR (30)"
            },
            {
                "name": "Description",
                "type": "NVARCHAR (30)"
            },
            {
                "name": "CancelationDate",
                "type": "DATETIME"
            },
            {
                "name": "UpdateStamp",
                "type": "INTEGER"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "MapLocations",
        "columns": [
            {
                "name": "City",
                "type": "NVARCHAR (50)"
            },
            {
                "name": "StreetName",
                "type": "NVARCHAR (50)"
            },
            {
                "name": "StreetNo",
                "type": "INTEGER"
            },
            {
                "name": "lat",
                "type": "FLOAT"
            },
            {
                "name": "lng",
                "type": "FLOAT"
            },
            {
                "name": "RecordInsertTime",
                "type": "DATETIME"
            },
            {
                "name": "PostCode",
                "type": "NVARCHAR (20)"
            },
            {
                "name": "UpdateStamp",
                "type": "INT"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "MileageCalculation",
        "columns": [
            {
                "name": "Type",
                "type": "nvarchar (50)"
            },
            {
                "name": "StartTime",
                "type": "DATETIME"
            },
            {
                "name": "EndTime",
                "type": "DATETIME"
            },
            {
                "name": "Reference",
                "type": "INTEGER"
            },
            {
                "name": "CarrierId",
                "type": "nvarchar (50)"
            },
            {
                "name": "Km",
                "type": "nvarchar (50)"
            },
            {
                "name": "Source",
                "type": "nvarchar (50)"
            },
            {
                "name": "CancelationDate",
                "type": "DATETIME"
            },
            {
                "name": "UpdateStamp",
                "type": "INTEGER"
            },
            {
                "name": "EstimatedRouteSeconds",
                "type": "INTEGER"
            },
            {
                "name": "MilesByGoogle",
                "type": "REAL"
            },
            {
                "name": "RecId",
                "type": "integer"
            },
            {
                "name": "StoreNo",
                "type": "integer"
            }
        ],
        "indexes": [
            {
                "name": "MileageCalculation_Type+CarrierId+Source",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "Type"
                    },
                    {
                        "name": "CarrierId"
                    },
                    {
                        "name": "Source"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "OptionLists",
        "columns": [
            {
                "name": "RecId",
                "type": "integer"
            },
            {
                "name": "OptionId",
                "type": "integer"
            },
            {
                "name": "OptionsType",
                "type": "nvarchar (50)"
            },
            {
                "name": "OptionValue",
                "type": "nvarchar (50)"
            },
            {
                "name": "Description",
                "type": "TEXT"
            },
            {
                "name": "Language",
                "type": "nvarchar (10)"
            },
            {
                "name": "RecordInsertTime",
                "type": "datetime"
            },
            {
                "name": "CancelationTime",
                "type": "datetime"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            },
            {
                "name": "NumericValue",
                "type": "float"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "OrderItems",
        "columns": [
            {
                "name": "OrderId",
                "type": "bigint"
            },
            {
                "name": "Position",
                "type": "nvarchar"
            },
            {
                "name": "FlowNo",
                "type": "int"
            },
            {
                "name": "Quantity",
                "type": "money"
            },
            {
                "name": "Description",
                "type": "nvarchar"
            },
            {
                "name": "KdsList",
                "type": "TEXT"
            },
            {
                "name": "Side",
                "type": "smallint"
            },
            {
                "name": "SortOrder",
                "type": "money"
            },
            {
                "name": "RecordInsertTime",
                "type": "datetime"
            },
            {
                "name": "ReachedTheMakeLineTime",
                "type": "datetime"
            },
            {
                "name": "PreparedTime",
                "type": "datetime"
            },
            {
                "name": "StartCookTime",
                "type": "datetime"
            },
            {
                "name": "ItemPackTime",
                "type": "datetime"
            },
            {
                "name": "TimeToShow",
                "type": "datetime"
            },
            {
                "name": "PreppedOnKds",
                "type": "nvarchar"
            },
            {
                "name": "CookedOnKds",
                "type": "nvarchar"
            },
            {
                "name": "PackedOnKds",
                "type": "nvarchar"
            },
            {
                "name": "PrintedOn",
                "type": "nvarchar"
            },
            {
                "name": "StoreNo",
                "type": "int"
            },
            {
                "name": "ItemNo",
                "type": "nvarchar"
            },
            {
                "name": "Bullet",
                "type": "nvarchar"
            },
            {
                "name": "Style",
                "type": "nvarchar"
            },
            {
                "name": "Flow1",
                "type": "int"
            },
            {
                "name": "FlowNo1",
                "type": "int"
            },
            {
                "name": "IsOvenItem",
                "type": "bit"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            },
            {
                "name": "UpdateStamp",
                "type": "int"
            },
            {
                "name": "WarningIcon",
                "type": "nvarchar(100)"
            },
            {
                "name": "AnalyzeTime",
                "type": "datetime"
            }
        ],
        "indexes": [
            {
                "name": "OrderItems_Order+Store+Position",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "OrderId"
                    },
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "Position"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "OrderItemsHistory",
        "columns": [
            {
                "name": "OrderId",
                "type": "bigint"
            },
            {
                "name": "Position",
                "type": "nvarchar"
            },
            {
                "name": "FlowNo",
                "type": "int"
            },
            {
                "name": "Quantity",
                "type": "money"
            },
            {
                "name": "Description",
                "type": "nvarchar"
            },
            {
                "name": "Side",
                "type": "smallint"
            },
            {
                "name": "SortOrder",
                "type": "money"
            },
            {
                "name": "RecordInsertTime",
                "type": "datetime"
            },
            {
                "name": "ReachedTheMakeLineTime",
                "type": "datetime"
            },
            {
                "name": "PreparedTime",
                "type": "datetime"
            },
            {
                "name": "StartCookTime",
                "type": "datetime"
            },
            {
                "name": "ItemPackTime",
                "type": "datetime"
            },
            {
                "name": "TimeToShow",
                "type": "datetime"
            },
            {
                "name": "PreppedOnKds",
                "type": "nvarchar"
            },
            {
                "name": "CookedOnKds",
                "type": "nvarchar"
            },
            {
                "name": "PackedOnKds",
                "type": "nvarchar"
            },
            {
                "name": "PrintedOn",
                "type": "nvarchar"
            },
            {
                "name": "StoreNo",
                "type": "int"
            },
            {
                "name": "ItemNo",
                "type": "nvarchar"
            },
            {
                "name": "Bullet",
                "type": "nvarchar"
            },
            {
                "name": "Style",
                "type": "nvarchar"
            },
            {
                "name": "Flow1",
                "type": "int"
            },
            {
                "name": "FlowNo1",
                "type": "int"
            },
            {
                "name": "IsOvenItem",
                "type": "bit"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            },
            {
                "name": "UpdateStamp",
                "type": "int"
            },
            {
                "name": "WarningIcon",
                "type": "nvarchar (100)"
            },
            {
                "name": "AnalyzeTime",
                "type": "datetime"
            },
            {
                "name": "KdsList",
                "type": "TEXT"
            }
        ],
        "indexes": [
            {
                "name": "OrderItemsHistory_Order+Store+Position",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "OrderId"
                    },
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "Position"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "OrderKits",
        "columns": [
            {
                "name": "Id",
                "type": "integer"
            },
            {
                "name": "OrdersXml",
                "type": "nvarchar(4000)"
            },
            {
                "name": "ItemsXml",
                "type": "nvarchar(4000)"
            },
            {
                "name": "FullLoad",
                "type": "bit"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "Orders",
        "columns": [
            {
                "name": "OrderId",
                "type": "bigint"
            },
            {
                "name": "DailyNo",
                "type": "int"
            },
            {
                "name": "OrderStatus",
                "type": "int"
            },
            {
                "name": "SaleType",
                "type": "smallint"
            },
            {
                "name": "FlowAlerts",
                "type": "int"
            },
            {
                "name": "NotificationsTypesSent",
                "type": "int"
            },
            {
                "name": "CarrierId",
                "type": "nvarchar"
            },
            {
                "name": "BatchNumber",
                "type": "int"
            },
            {
                "name": "OrderInRoute",
                "type": "smallint"
            },
            {
                "name": "OrderTime",
                "type": "DATETIME"
            },
            {
                "name": "ReachedTheMakeLine",
                "type": "DATETIME"
            },
            {
                "name": "MakeLineTime",
                "type": "DATETIME"
            },
            {
                "name": "OvenRecommendTime",
                "type": "DATETIME"
            },
            {
                "name": "OvenTime",
                "type": "DATETIME"
            },
            {
                "name": "PackTime",
                "type": "DATETIME"
            },
            {
                "name": "DispatchTime",
                "type": "DATETIME"
            },
            {
                "name": "OutOfDoor",
                "type": "DATETIME"
            },
            {
                "name": "DispatchETA",
                "type": "DATETIME"
            },
            {
                "name": "EstimatedDeliveryTime",
                "type": "DATETIME"
            },
            {
                "name": "CarrierCloseToAddress",
                "type": "DATETIME"
            },
            {
                "name": "RecommendDeliveryTime",
                "type": "DATETIME"
            },
            {
                "name": "DeliveryTime",
                "type": "DATETIME"
            },
            {
                "name": "EvaluatedDeliveryTime",
                "type": "DATETIME"
            },
            {
                "name": "BackToStoreTime",
                "type": "DATETIME"
            },
            {
                "name": "IsTimedOrder",
                "type": "BIT"
            },
            {
                "name": "TimeToPrioritize",
                "type": "DATETIME"
            },
            {
                "name": "StoreNo",
                "type": "int"
            },
            {
                "name": "ClientId",
                "type": "bigint"
            },
            {
                "name": "FirstName",
                "type": "nvarchar"
            },
            {
                "name": "LastName",
                "type": "nvarchar"
            },
            {
                "name": "PostCode",
                "type": "nvarchar"
            },
            {
                "name": "City",
                "type": "nvarchar"
            },
            {
                "name": "Street",
                "type": "nvarchar"
            },
            {
                "name": "Number",
                "type": "nvarchar"
            },
            {
                "name": "Lat",
                "type": "MONEY"
            },
            {
                "name": "Lng",
                "type": "MONEY"
            },
            {
                "name": "MapsRetry",
                "type": "int"
            },
            {
                "name": "SectorId",
                "type": "nvarchar"
            },
            {
                "name": "Phone",
                "type": "nvarchar"
            },
            {
                "name": "Email",
                "type": "nvarchar"
            },
            {
                "name": "Source",
                "type": "int"
            },
            {
                "name": "CSR",
                "type": "int"
            },
            {
                "name": "OrderTotal",
                "type": "money"
            },
            {
                "name": "PaymentMethod",
                "type": "int"
            },
            {
                "name": "Note",
                "type": "int"
            },
            {
                "name": "RefundFor",
                "type": "int"
            },
            {
                "name": "Cash",
                "type": "float"
            },
            {
                "name": "CarrierInstructions",
                "type": "nvarchar"
            },
            {
                "name": "CookInstructions",
                "type": "nvarchar"
            },
            {
                "name": "MainItems",
                "type": "float"
            },
            {
                "name": "EstimatedPrepSeconds",
                "type": "int"
            },
            {
                "name": "EstimatedCookSeconds",
                "type": "int"
            },
            {
                "name": "EstimatedPackSeconds",
                "type": "int"
            },
            {
                "name": "EstimatedDriveSeconds",
                "type": "int"
            },
            {
                "name": "PreparedBy",
                "type": "nvarchar"
            },
            {
                "name": "Shelf",
                "type": "int"
            },
            {
                "name": "ManualDecissionTime",
                "type": "DATETIME"
            },
            {
                "name": "UpdateStamp",
                "type": "INTEGER"
            },
            {
                "name": "PromiseSeconds",
                "type": "INTEGER"
            }
        ],
        "indexes": [
            {
                "name": "Orders_Id+Store",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "OrderId"
                    },
                    {
                        "name": "StoreNo"
                    }
                ]
            },
            {
                "name": "Manual+Store",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "ManualDecissionTime"
                    },
                    {
                        "name": "StoreNo"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "OrdersHistory",
        "columns": [
            {
                "name": "OrderId",
                "type": "bigint"
            },
            {
                "name": "DailyNo",
                "type": "int"
            },
            {
                "name": "OrderStatus",
                "type": "int"
            },
            {
                "name": "SaleType",
                "type": "smallint"
            },
            {
                "name": "FlowAlerts",
                "type": "int"
            },
            {
                "name": "NotificationsTypesSent",
                "type": "int"
            },
            {
                "name": "CarrierId",
                "type": "nvarchar"
            },
            {
                "name": "BatchNumber",
                "type": "int"
            },
            {
                "name": "OrderInRoute",
                "type": "smallint"
            },
            {
                "name": "OrderTime",
                "type": "DATETIME"
            },
            {
                "name": "ReachedTheMakeLine",
                "type": "DATETIME"
            },
            {
                "name": "MakeLineTime",
                "type": "DATETIME"
            },
            {
                "name": "OvenRecommendTime",
                "type": "DATETIME"
            },
            {
                "name": "OvenTime",
                "type": "DATETIME"
            },
            {
                "name": "PackTime",
                "type": "DATETIME"
            },
            {
                "name": "DispatchTime",
                "type": "DATETIME"
            },
            {
                "name": "OutOfDoor",
                "type": "DATETIME"
            },
            {
                "name": "DispatchETA",
                "type": "DATETIME"
            },
            {
                "name": "EstimatedDeliveryTime",
                "type": "DATETIME"
            },
            {
                "name": "CarrierCloseToAddress",
                "type": "DATETIME"
            },
            {
                "name": "RecommendDeliveryTime",
                "type": "DATETIME"
            },
            {
                "name": "DeliveryTime",
                "type": "DATETIME"
            },
            {
                "name": "EvaluatedDeliveryTime",
                "type": "DATETIME"
            },
            {
                "name": "BackToStoreTime",
                "type": "DATETIME"
            },
            {
                "name": "IsTimedOrder",
                "type": "BIT"
            },
            {
                "name": "TimeToPrioritize",
                "type": "DATETIME"
            },
            {
                "name": "StoreNo",
                "type": "int"
            },
            {
                "name": "ClientId",
                "type": "bigint"
            },
            {
                "name": "FirstName",
                "type": "nvarchar"
            },
            {
                "name": "LastName",
                "type": "nvarchar"
            },
            {
                "name": "PostCode",
                "type": "nvarchar"
            },
            {
                "name": "City",
                "type": "nvarchar"
            },
            {
                "name": "Street",
                "type": "nvarchar"
            },
            {
                "name": "Number",
                "type": "nvarchar"
            },
            {
                "name": "Lat",
                "type": "MONEY"
            },
            {
                "name": "Lng",
                "type": "MONEY"
            },
            {
                "name": "MapsRetry",
                "type": "int"
            },
            {
                "name": "SectorId",
                "type": "nvarchar"
            },
            {
                "name": "Phone",
                "type": "nvarchar"
            },
            {
                "name": "Email",
                "type": "nvarchar"
            },
            {
                "name": "Source",
                "type": "int"
            },
            {
                "name": "CSR",
                "type": "int"
            },
            {
                "name": "OrderTotal",
                "type": "money"
            },
            {
                "name": "PaymentMethod",
                "type": "int"
            },
            {
                "name": "Note",
                "type": "int"
            },
            {
                "name": "RefundFor",
                "type": "int"
            },
            {
                "name": "Cash",
                "type": "float"
            },
            {
                "name": "CarrierInstructions",
                "type": "nvarchar"
            },
            {
                "name": "CookInstructions",
                "type": "nvarchar"
            },
            {
                "name": "MainItems",
                "type": "float"
            },
            {
                "name": "EstimatedPrepSeconds",
                "type": "int"
            },
            {
                "name": "EstimatedCookSeconds",
                "type": "int"
            },
            {
                "name": "EstimatedPackSeconds",
                "type": "int"
            },
            {
                "name": "EstimatedDriveSeconds",
                "type": "int"
            },
            {
                "name": "PreparedBy",
                "type": "nvarchar"
            },
            {
                "name": "Shelf",
                "type": "int"
            },
            {
                "name": "ManualDecissionTime",
                "type": "DATETIME"
            },
            {
                "name": "UpdateStamp",
                "type": "INTEGER"
            },
            {
                "name": "PromiseSeconds",
                "type": "INTEGER"
            }
        ],
        "indexes": [
            {
                "name": "OrderStatus+StoreNo",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "OrderStatus"
                    },
                    {
                        "name": "StoreNo"
                    }
                ]
            },
            {
                "name": "OrdersHistory_Id+Store",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "OrderId"
                    },
                    {
                        "name": "StoreNo"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "SaleTypes",
        "columns": [
            {
                "name": "SaleTypeId",
                "type": "integer"
            },
            {
                "name": "Description",
                "type": "nvarchar(50)"
            },
            {
                "name": "Icon",
                "type": "nvarchar(150)"
            },
            {
                "name": "SecondsTimedOrderDispalyedOnKds",
                "type": "integer"
            },
            {
                "name": "SecondsTimedOrderDispalyedOnDispatch",
                "type": "integer"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            },
            {
                "name": "TimedOrders",
                "type": "TEXT"
            }
        ],
        "indexes": [
            {
                "name": "SaleType",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "SaleTypeId"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "SectorsRules",
        "columns": [
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "FromSector",
                "type": "nvarchar(20)"
            },
            {
                "name": "ToSector",
                "type": "nvarchar(20)"
            },
            {
                "name": "Symmetric",
                "type": "bit"
            },
            {
                "name": "ExtraSeconds",
                "type": "integer"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            }
        ],
        "indexes": [
            {
                "name": "Store+From+To",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "FromSector"
                    },
                    {
                        "name": "ToSector"
                    }
                ]
            },
            {
                "name": "SectorsRules_StoreNo",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "SqlQueries",
        "columns": [
            {
                "name": "RecId",
                "type": "integer"
            },
            {
                "name": "QueryId",
                "type": "nvarchar(255)"
            },
            {
                "name": "QueryType",
                "type": "nvarchar(50)"
            },
            {
                "name": "Script",
                "type": "nvarchar"
            },
            {
                "name": "RecordInsertTime",
                "type": "datetime"
            },
            {
                "name": "CancelationTime",
                "type": "datetime"
            },
            {
                "name": "LastUpdateTime",
                "type": "datetime"
            },
            {
                "name": "TicketId",
                "type": "nvarchar(255)"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "StoreOpeningHours",
        "columns": [
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "WeekDay",
                "type": "integer"
            },
            {
                "name": "StartTime",
                "type": "varchar(8)"
            },
            {
                "name": "EndTime",
                "type": "varchar(8)"
            },
            {
                "name": "Status",
                "type": "integer"
            },
            {
                "name": "UpdateStamp",
                "type": "int"
            }
        ],
        "indexes": [
            {
                "name": "StoreOpeningHours_StoreNo",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    }
                ]
            },
            {
                "name": "Store+Day",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "WeekDay"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "StorePolygon",
        "columns": [
            {
                "name": "Lat",
                "type": "float"
            },
            {
                "name": "Lng",
                "type": "float"
            },
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "Enabled",
                "type": "bit"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            },
            {
                "name": "SortOrder",
                "type": "integer"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            },
            {
                "name": "SectorId",
                "type": "nvarchar (20)"
            }
        ],
        "indexes": [
            {
                "name": "Store+Order+Sector",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "SortOrder"
                    },
                    {
                        "name": "SectorId"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "StoreSectors",
        "columns": [
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "SectorId",
                "type": "nvarchar(20)"
            },
            {
                "name": "Description",
                "type": "nvarchar(50)"
            },
            {
                "name": "UpdateStamp",
                "type": "int"
            }
        ],
        "indexes": [
            {
                "name": "StoreSectors_StoreNo",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    }
                ]
            },
            {
                "name": "Store+Sector",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "SectorId"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "StoreStations",
        "columns": [
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "StationId",
                "type": "nvarchar (20)"
            },
            {
                "name": "Description",
                "type": "nvarchar (50)"
            },
            {
                "name": "Configuration",
                "type": "nvarchar (1000)"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            },
            {
                "name": "ReportedVersion",
                "type": "nvarchar (50)"
            },
            {
                "name": "RequiredVersion",
                "type": "nvarchar (50)"
            },
            {
                "name": "LastLogin",
                "type": "datetime"
            },
            {
                "name": "FromIp",
                "type": "nvarchar (50)"
            },
            {
                "name": "LastIpChange",
                "type": "datetime"
            },
            {
                "name": "FilterSql",
                "type": "TEXT"
            },
            {
                "name": "CookInstrAddonSql",
                "type": "TEXT"
            },
            {
                "name": "BumpPrintSql",
                "type": "INTEGER"
            },
            {
                "name": "BumpConditionSql",
                "type": "TEXT"
            },
            {
                "name": "ReachedPrintSql",
                "type": "nvarchar(4000)"
            },
            {
                "name": "PrepBarTemplate",
                "type": "NVARCHAR (50)"
            }
        ],
        "indexes": [
            {
                "name": "Store+Station",
                "unique": true,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "StationId"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "Stores",
        "columns": [
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "StoreName",
                "type": "nvarchar (100)"
            },
            {
                "name": "StoreServerIp",
                "type": "nvarchar (100)"
            },
            {
                "name": "StoreServerPort",
                "type": "integer"
            },
            {
                "name": "DebugMode",
                "type": "integer"
            },
            {
                "name": "Lat",
                "type": "float"
            },
            {
                "name": "Lng",
                "type": "float"
            },
            {
                "name": "TimeOffset",
                "type": "integer"
            },
            {
                "name": "NumberOfMakeLinesEmployees",
                "type": "integer"
            },
            {
                "name": "LastGpsStatus",
                "type": "datetime"
            },
            {
                "name": "MakeOrdersLevel0",
                "type": "integer"
            },
            {
                "name": "MakeOrdersLevel1",
                "type": "integer"
            },
            {
                "name": "MakeOrdersLevel2",
                "type": "integer"
            },
            {
                "name": "MakeOrdersLevel3",
                "type": "integer"
            },
            {
                "name": "PrepareSeconds",
                "type": "integer"
            },
            {
                "name": "OvenSeconds",
                "type": "integer"
            },
            {
                "name": "CutSeconds",
                "type": "integer"
            },
            {
                "name": "CutSecondPizza",
                "type": "integer"
            },
            {
                "name": "TimeToWaitForSecondDelivery",
                "type": "integer"
            },
            {
                "name": "SecondsAllowedBetweenCoupledOrders",
                "type": "integer"
            },
            {
                "name": "SecondsAllowedBetweenPreparedAndOvenOrder",
                "type": "integer"
            },
            {
                "name": "SecondsForKm",
                "type": "integer"
            },
            {
                "name": "SecondsFromStopToDoorWay",
                "type": "integer"
            },
            {
                "name": "GeneralStreetName",
                "type": "nvarchar (50)"
            },
            {
                "name": "GpsUn",
                "type": "nvarchar (50)"
            },
            {
                "name": "GpsPw",
                "type": "nvarchar (50)"
            },
            {
                "name": "TripletsDistanceInSeconds",
                "type": "integer"
            },
            {
                "name": "SmsUsername",
                "type": "nvarchar (50)"
            },
            {
                "name": "SmsPassword",
                "type": "nvarchar (50)"
            },
            {
                "name": "SmsSender",
                "type": "nvarchar (50)"
            },
            {
                "name": "SmsMsgtypesToSend",
                "type": "integer"
            },
            {
                "name": "MaxMinutesToNotifyCustomer",
                "type": "integer"
            },
            {
                "name": "CarrierFollowUpLink",
                "type": "nvarchar (1000)"
            },
            {
                "name": "LastGpsRecId",
                "type": "integer"
            },
            {
                "name": "SecondsAllowedNotToBeDispatched",
                "type": "integer"
            },
            {
                "name": "GpsNotificationServerIp",
                "type": "nvarchar (100)"
            },
            {
                "name": "GpsNotificationServerPort",
                "type": "nvarchar (50)"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            },
            {
                "name": "Dragonsensededuct",
                "type": "integer"
            },
            {
                "name": "Region",
                "type": "integer"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            },
            {
                "name": "MaxOrdersToHoldOnShelf",
                "type": "integer"
            },
            {
                "name": "SecondsBetweenVeryCloseOrdersOnOppositeSides1c",
                "type": "integer"
            },
            {
                "name": "CoupleOrderIfOrder2SecondsFromStoreUnder1c",
                "type": "integer"
            },
            {
                "name": "CoupleOrderIfOrder1SecondsFromStoreUnder1c",
                "type": "integer"
            },
            {
                "name": "MaxDetourSecondsToOrder21c",
                "type": "integer"
            },
            {
                "name": "Order2ToStoreVsOrder1ToOrder2Factor1c",
                "type": "float"
            },
            {
                "name": "SecondsFromDispatchToDoor1c",
                "type": "integer"
            },
            {
                "name": "SecondsBetweenVeryCloseOrdersOnOppositeSidesMc",
                "type": "integer"
            },
            {
                "name": "CoupleOrderIfOrder2SecondsFromStoreUnderMc",
                "type": "integer"
            },
            {
                "name": "CoupleOrderIfOrder1SecondsFromStoreUnderMc",
                "type": "integer"
            },
            {
                "name": "MaxDetourSecondsToOrder2Mc",
                "type": "integer"
            },
            {
                "name": "Order2ToStoreVsOrder1ToOrder2FactorMc",
                "type": "float"
            },
            {
                "name": "SecondsFromDispatchToDoorMc",
                "type": "integer"
            },
            {
                "name": "SecondsBetweenOrdersForSingles",
                "type": "integer"
            },
            {
                "name": "AddressStructure",
                "type": "nvarchar (120)"
            },
            {
                "name": "MaxSecondsOnShelf",
                "type": "integer"
            },
            {
                "name": "DriveCondition",
                "type": "integer"
            },
            {
                "name": "DriveConditionMultiplier",
                "type": "integer"
            },
            {
                "name": "ClosureTime",
                "type": "datetime"
            },
            {
                "name": "MessagesEmailAccount",
                "type": "nvarchar"
            },
            {
                "name": "LockDecisionsStyle",
                "type": "integer"
            },
            {
                "name": "MaxSecondsToCustomer",
                "type": "integer"
            },
            {
                "name": "MaxWaitSecondsToPreferSplittingTriplets",
                "type": "integer"
            },
            {
                "name": "SecondsToForceTakeawayOrders",
                "type": "integer"
            },
            {
                "name": "Country",
                "type": "nvarchar (50)"
            },
            {
                "name": "MobileAutoStatusFlags",
                "type": "integer"
            },
            {
                "name": "TrackerBehaviorFlags",
                "type": "integer"
            },
            {
                "name": "DisassembleRules",
                "type": "nvarchar (250)"
            },
            {
                "name": "CourseTiming",
                "type": "nvarchar (4000)"
            },
            {
                "name": "RouteCapacity",
                "type": "nvarchar (1000)"
            },
            {
                "name": "LogVerbosity",
                "type": "TEXT"
            },
            {
                "name": "DefaultLang",
                "type": "nvarchar(30)"
            },
            {
                "name": "Proxy",
                "type": "nvarchar(4000)"
            },
            {
                "name": "Options",
                "type": "TEXT"
            }
        ],
        "indexes": [
            {
                "name": "Stores_StoreNo",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "SurveyData",
        "columns": [
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "OrderId",
                "type": "integer"
            },
            {
                "name": "QuestionNumber",
                "type": "integer"
            },
            {
                "name": "Score",
                "type": "integer"
            },
            {
                "name": "RecordInsertTime",
                "type": "datetime"
            },
            {
                "name": "EventTime",
                "type": "datetime"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            }
        ],
        "indexes": [
            {
                "name": "Store+Order+Score",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "OrderId"
                    },
                    {
                        "name": "Score"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "TableCreateView",
        "columns": [
            {
                "name": "TestColumn",
                "type": "int"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "TableGetIndexes",
        "columns": [
            {
                "name": "TestColumn",
                "type": "int"
            }
        ],
        "indexes": [
            {
                "name": "TestGetIndex",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "TestColumn"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "TestTable",
        "columns": [
            {
                "name": "TestColumn",
                "type": "int"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "TestTableColumns",
        "columns": [
            {
                "name": "TestColumn",
                "type": "int"
            },
            {
                "name": "TestColumn2",
                "type": "int"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "TestTableInsert",
        "columns": [
            {
                "name": "TestColumn",
                "type": "int"
            },
            {
                "name": "TestColumnStr",
                "type": "char"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "TestTableRename",
        "columns": [
            {
                "name": "TestColumn",
                "type": "int"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "TestTableUpdate",
        "columns": [
            {
                "name": "TestColumn",
                "type": "int"
            },
            {
                "name": "TestColumnStr",
                "type": "char"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "TestUsersRename",
        "columns": [
            {
                "name": "tst",
                "type": "int"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "TrackerInfo",
        "columns": [
            {
                "name": "ActionTime",
                "type": "datetime"
            },
            {
                "name": "OrderId",
                "type": "integer"
            },
            {
                "name": "Stage",
                "type": "nvarchar (100)"
            },
            {
                "name": "Data",
                "type": "nvarchar (4000)"
            },
            {
                "name": "CarrierId",
                "type": "nvarchar (50)"
            },
            {
                "name": "RecId",
                "type": "integer"
            },
            {
                "name": "UpdateStamp",
                "type": "int"
            }
        ],
        "indexes": [
            {
                "name": "TrackerInfo_RecId",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "RecId"
                    }
                ]
            },
            {
                "name": "Order+Time",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "OrderId"
                    },
                    {
                        "name": "ActionTime"
                    }
                ]
            },
            {
                "name": "ActionTime",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "ActionTime"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "Translations",
        "columns": [
            {
                "name": "Module",
                "type": "nvarchar (50)"
            },
            {
                "name": "Page",
                "type": "nvarchar (50)"
            },
            {
                "name": "Element",
                "type": "nvarchar (50)"
            },
            {
                "name": "Attribute",
                "type": "nvarchar (50)"
            },
            {
                "name": "Value",
                "type": "nvarchar (4000)"
            },
            {
                "name": "Language",
                "type": "nvarchar (30)"
            },
            {
                "name": "UpdateStamp",
                "type": "INTEGER"
            },
            {
                "name": "CancelationDate",
                "type": "DATETIME"
            }
        ],
        "indexes": null,
        "views": null
    },
    {
        "name": "UpdateStamps",
        "columns": [
            {
                "name": "StampNo",
                "type": "integer"
            },
            {
                "name": "Description",
                "type": "nvarchar (100)"
            },
            {
                "name": "StampDate",
                "type": "datetime"
            },
            {
                "name": "UserId",
                "type": "nvarchar (100)"
            }
        ],
        "indexes": [
            {
                "name": "StampNo",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StampNo"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "Users",
        "columns": [
            {
                "name": "UserName",
                "type": "nvarchar (50)"
            },
            {
                "name": "Password",
                "type": "nvarchar (50)"
            },
            {
                "name": "Token",
                "type": "nvarchar (50)"
            },
            {
                "name": "LastLogin",
                "type": "datetime"
            },
            {
                "name": "LastActivity",
                "type": "datetime"
            },
            {
                "name": "Level",
                "type": "integer"
            },
            {
                "name": "DashboardGroupNo",
                "type": "integer"
            },
            {
                "name": "UpdateStamp",
                "type": "int"
            },
            {
                "name": "Filters",
                "type": "nvarchar (4000)"
            },
            {
                "name": "CancelationDate",
                "type": "TEXT"
            },
            {
                "name": "BackofficeGroupNo",
                "type": "INTEGER"
            },
            {
                "name": "DefaultBOPage",
                "type": "TEXT"
            },
            {
                "name": "Email",
                "type": "TEXT"
            },
            {
                "name": "MobilePhone",
                "type": "TEXT PinCode TEXT"
            },
            {
                "name": "PinCode",
                "type": "TEXT"
            },
            {
                "name": "LockingTime",
                "type": "DATETIME"
            },
            {
                "name": "FailedLoginAttempts",
                "type": "INTEGER"
            },
            {
                "name": "PwChangedTime",
                "type": "DATETIME"
            }
        ],
        "indexes": [
            {
                "name": "User",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "UserName"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "VehicleAssignments",
        "columns": [
            {
                "name": "TranId",
                "type": "integer"
            },
            {
                "name": "Vehicle_Id",
                "type": "nvarchar (10)"
            },
            {
                "name": "CarrierId",
                "type": "nvarchar (50)"
            },
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "TranTime",
                "type": "datetime"
            },
            {
                "name": "UpdateStamp",
                "type": "INTEGER"
            },
            {
                "name": "Source",
                "type": "nvarchar (50)"
            }
        ],
        "indexes": [
            {
                "name": "Vehicle+Store+TranTime",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "Vehicle_Id"
                    },
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "TranTime"
                    }
                ]
            },
            {
                "name": "Vehicle+Carrier+Store",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "Vehicle_Id"
                    },
                    {
                        "name": "CarrierId"
                    },
                    {
                        "name": "StoreNo"
                    }
                ]
            },
            {
                "name": "TranId",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "TranId"
                    }
                ]
            },
            {
                "name": "Carrier+Store+TranTime",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "CarrierId"
                    },
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "TranTime"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "Vehicles",
        "columns": [
            {
                "name": "Id",
                "type": "nvarchar (10)"
            },
            {
                "name": "Number",
                "type": "nvarchar (50)"
            },
            {
                "name": "Status",
                "type": "integer"
            },
            {
                "name": "Refueled",
                "type": "datetime"
            },
            {
                "name": "StoreNo",
                "type": "integer"
            },
            {
                "name": "Ignition",
                "type": "bit"
            },
            {
                "name": "locationStatus",
                "type": "integer"
            },
            {
                "name": "Direction",
                "type": "integer"
            },
            {
                "name": "Milage",
                "type": "float"
            },
            {
                "name": "UpdateStamp",
                "type": "integer"
            },
            {
                "name": "TestTime",
                "type": "datetime"
            },
            {
                "name": "InsuranceTime",
                "type": "datetime"
            },
            {
                "name": "CancelationDate",
                "type": "datetime"
            },
            {
                "name": "InsuranceNumber",
                "type": "nvarchar (50)"
            },
            {
                "name": "PurchaseTime",
                "type": "datetime"
            },
            {
                "name": "Model",
                "type": "nvarchar (50)"
            },
            {
                "name": "ManufactureYear",
                "type": "integer"
            }
        ],
        "indexes": [
            {
                "name": "Store+Status",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "StoreNo"
                    },
                    {
                        "name": "Status"
                    }
                ]
            },
            {
                "name": "Plate",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "Number"
                    }
                ]
            },
            {
                "name": "Id",
                "unique": false,
                "partial": false,
                "columns": [
                    {
                        "name": "Id"
                    }
                ]
            }
        ],
        "views": null
    },
    {
        "name": "VersionUpdates",
        "columns": [
            {
                "name": "RecId",
                "type": "integer"
            },
            {
                "name": "Description",
                "type": "nvarchar(50)"
            },
            {
                "name": "Link",
                "type": "nvarchar(150)"
            },
            {
                "name": "UpdateRelease",
                "type": "datetime"
            },
            {
                "name": "MinVersionToUpdate",
                "type": "nvarchar(50)"
            },
            {
                "name": "RecordInsertTime",
                "type": "datetime"
            },
            {
                "name": "CancelationTime",
                "type": "datetime"
            }
        ],
        "indexes": null,
        "views": null
    }
];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.allTableData);
      }, 2000);
    });
  }
}
