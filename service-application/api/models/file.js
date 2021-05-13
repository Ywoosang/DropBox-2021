const Sequelize = require('sequelize');

module.exports = class File extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      fileUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      favorate : {
        type : Sequelize.TINYINT(1),
        defaultValue : 0,
        allowNull : false
      }
    }, {
      sequelize,
      // createdAt 
      timestamps: true,
      underscored: false,
      modelName: 'File',
      tableName: 'files',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.File.belongsTo(db.User,{
        foreignKey : 'ownerId'
    });
    db.File.belongsTo(db.Folder,{
        foreignKey : 'folderId'
    })
 }
};
