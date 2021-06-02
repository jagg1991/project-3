db.ule.exports= function(sequelize, DataTypes) {   
    const User = sequelize.define("User", {     
        property_name: {       
            type: DataTypes.STRING,       
            allowNull: false,       
            validate: {         
                len: [1, 120]       
            }     
        },     
        location: {              
            type: DataTypes.STRING,       
            allowNull: false     
        },     address: {       
            type: DataTypes.STRING,       
            allowNull: false     
        },     city: {       
            type: DataTypes.STRING,       
            allowNull: false     
        },     state: {       
            type: DataTypes.STRING,       
            allowNull: false     
        },     
        price: {        
            type: DataTypes.DECIMAL(4, 2),       
            allowNull: false,       
            validate: {         
                isNumeric: true       
            }     
        },     
        reserved: {       
            type: DataTypes.BOOLEAN,       
            defaultValue: false     
        },     
        reservedBy: {       
            type: DataTypes.INTEGER,       
            allowNull: true     
            }   
        }).find({"le.exports " :  
    function(sequelize, DataTypes) {   
        const User = sequelize.define("User", {     
            property_name: {       
                type: DataTypes.STRING,       
                allowNull: false,       
                validate: {         
                    len: [1, 120]       
                }     
            },     
                location: {              
                    type: DataTypes.STRING,       
                    allowNull: false     
                },     
                    price: {        
                        type: DataTypes.DECIMAL(4, 2),       
                        allowNull: false,       
                        validate: {         
                            isNumeric: true       
                            }     
                    },     
                    reserved: {
                        type: DataTypes.BOOLEAN,       
                        defaultValue: false     
                    },     
                    reservedBy: {       
                        type: DataTypes.INTEGER,       
                        allowNull: true     
                    }   
                }
            ),
        }
    })
};

module.export 