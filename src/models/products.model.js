// products-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "products";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      category: { type: String, required: true, enum: ["men", "women"] },
      subCategory: {
        type: String,
        required: true,
        enum: [
          "lehenga",
          "anarkali",
          "gown",
          "salwar_kurti",
          "skirt",
          "onePiece",
        ],
      },
      lehenga: {
        top: {
          blouseCuttingstyle: {
            singlekattori: { type: Number, default: 0 },
            doubleKattori: { type: Number, default: 0 },
            princesscut: { type: Number, default: 0 },
            alitcut: { type: Number, default: 0 },
            plaincut: { type: Number, default: 0 },
            crossstraightcut: { type: Number, default: 0 },
          },
          zip_hook: {
            frontHook: { type: Number, default: 0 },
            backHook: { type: Number, default: 0 },
            sideZip: { type: Number, default: 0 },
            frontZip: { type: Number, default: 0 },
            backZip: { type: Number, default: 0 },
          },
          sleeveLength: {
            shortSleeve: { type: Number, default: 0 },
            belowElbowLength: { type: Number, default: 0 },
            aboveElbowLength: { type: Number, default: 0 },
            fullLength: { type: Number, default: 0 },
            noSleeve: { type: Number, default: 0 },
          },
          blousePiping: {
            sareeColor: { type: Number, default: 0 },
            blouseColor: { type: Number, default: 0 },
          },
          doori: { type: Number, default: 0 },
          lining: { type: Number, default: 0 },
          padded_cups: { type: Number, default: 0 },
          design: { type: String },
        },

        bottom: {
          waistBelt: {
            doori: { type: Number, default: 0 },
            button: { type: Number, default: 0 },
          },
          borderAttachement: {
            image: { type: String },
            price: { type: Number, default: 0 },
          },
          lining: {
            cotton: { type: Number, default: 0 },
            polyster: { type: Number, default: 0 },
          },
          canCan: { type: Number, default: 0 },
          skirtDesign: { type: Number, default: 0 },
        },

        duppataCustomization: {
          zigZag: { type: Number, default: 0 },
          borderAttachment: { type: Number, default: 0 },
          lengthCutting: { type: Number, default: 0 },
        },

        shrug: {
          sleeveLength: {
            noSleeve: { type: Number, default: 0 },
            fullSleeve: { type: Number, default: 0 },
            belowSleeve: { type: Number, default: 0 },
            aboveSleeve: { type: Number, default: 0 },
            short: { type: Number, default: 0 },
          },
          borderAttachment: { type: Number, default: 0 },
        },
      },

      //===============================Anarkali
      anarkali: {
        top: {
          cuttingStyle: {
            princessCut: { type: Number, default: 0 },
            plainCut: { type: Number, default: 0 },
          },
          sleeveLength: {
            shortSleeveLength: { type: Number, default: 0 },
            fullSleeveLength: { type: Number, default: 0 },
            belowElbowLength: { type: Number, default: 0 },
            aboveElbowLength: { type: Number, default: 0 },
            noSleeveLength: { type: Number, default: 0 },
          },

          paddedCups: { type: Number, default: 0 },
          piping: { type: Number, default: 0 },
          sleeveDesign: { type: Number, default: 0 },
          frontDesign: { type: Number, default: 0 },
          backDesign: { type: Number, default: 0 },
          borderForCollarAttachment: { type: Number, default: 0 },
        },

        bottomFlare: {
          flareLength: {
            ankleLength: { type: Number, default: 0 },
            teaLength: { type: Number, default: 0 },
            floorLength: { type: Number, default: 0 },
          },
          lining: {
            cotton: { type: Number, default: 0 },
            polyster: { type: Number, default: 0 },
          },
          flareDesign: { type: Number, default: 0 },
          borderAttachment: { type: Number, default: 0 },
          canCan: { type: Number, default: 0 },
        },

        duppataCustomization: {
          zigZag: { type: Number, default: 0 },
          borderAttachment: { type: Number, default: 0 },
          lengthCutting: { type: Number, default: 0 },
        },

        shrug: {
          sleeveDesign: {
            fullSleeve: { type: Number, default: 0 },
            halfSleeve: { type: Number, default: 0 },
          },
          borderAttachment: { type: String },
        },
        pant: {
          types: {
            patiyala: { type: Number, default: 0 },
            cigarete: { type: Number, default: 0 },
            normal: { type: Number, default: 0 },
          },
          waistType: {
            elastic: { type: Number, default: 0 },
            normal: { type: Number, default: 0 },
            doori: { type: Number, default: 0 },
          },
          stitching: { type: Number, default: 0 },
          pantDesign: { type: Number, default: 0 },
        },
      },
      gown: {
        top: {
          cuttingStyle: {
            princessCut: { type: Number, default: 0 },
            plainCut: { type: Number, default: 0 },
          },
          SleeveLength: {
            shortSleeveLength: { type: Number, default: 0 },
            fullSleeveLength: { type: Number, default: 0 },
            belowElbowLength: { type: Number, default: 0 },
            aboveElbowLength: { type: Number, default: 0 },
            noSleeveLength: { type: Number, default: 0 },
          },
          paddedCups: { type: Number, default: 0 },
          piping: { type: Number, default: 0 },
          sleeveDesign: { type: Number, default: 0 },
          frontDesign: { type: Number, default: 0 },
          backDesign: { type: Number, default: 0 },
          borderForCollarAttachment: { type: Number, default: 0 },
        },
        bottomFlare: {
          flareDesign: { type: Number, default: 0 },
          borderAttachment: { type: Number, default: 0 },
          canCan: { type: Number, default: 0 },
          flareLength: {
            ankleLength: { type: Number, default: 0 },
            teaLength: { type: Number, default: 0 },
            floorLength: { type: Number, default: 0 },
          },
          lining: {
            cotton: { type: Number, default: 0 },
            polyster: { type: Number, default: 0 },
          },
        },
      },
      salwar_kurti: {
        top: {
          cuttingStyle: {
            princessCut: { type: Number, default: 0 },
            plainCut: { type: Number, default: 0 },
          },
          sleeveLength: {
            shortSleeveLength: { type: Number, default: 0 },
            fullSleeveLength: { type: Number, default: 0 },
            belowElbowLength: { type: Number, default: 0 },
            aboveElbowLength: { type: Number, default: 0 },
            noSleeveLength: { type: Number, default: 0 },
          },
          paddedCups: { type: Number, default: 0 },
          piping: { type: Number, default: 0 },
          SleeveDesign: { type: Number, default: 0 },
          frontDesign: { type: Number, default: 0 },
          backDesign: { type: Number, default: 0 },
          borderForCollarAttachment: { type: Number, default: 0 },
        },
        bottomFlare: {
          flareDesign: { type: Number, default: 0 },
          borderAttachment: { type: Number, default: 0 },
          canCan: { type: Number, default: 0 },
          flareLength: {
            ankleLength: { type: Number, default: 0 },
            teaLength: { type: Number, default: 0 },
            floorLength: { type: Number, default: 0 },
          },
          lining: {
            cotton: { type: Number, default: 0 },
            polyster: { type: Number, default: 0 },
          },
        },
        duppataCustomization: {
          zigZig: { type: Number, default: 0 },
          borderAttachment: { type: Number, default: 0 },
          lengthCutting: { type: Number, default: 0 },
        },
        shrug: {
          borderAttachment: { type: Number, default: 0 },
          sleeveDesign: {
            fullSleeve: { type: Number, default: 0 },
            halfSleeve: { type: Number, default: 0 },
          },
        },
        pant: {
          stitching: { type: Number, default: 0 },
          pantDesign: { type: Number, default: 0 },
          types: {
            patiyala: { type: Number, default: 0 },
            cigarete: { type: Number, default: 0 },
            normal: { type: Number, default: 0 },
          },
          waistType: {
            elastic: { type: Number, default: 0 },
            normal: { type: Number, default: 0 },
            doori: { type: Number, default: 0 },
          },
        },
      },
      skirt: {
        bottom: {
          lining: {
            cotton: { type: Number, default: 0 },
            polyster: { type: Number, default: 0 },
          },
          waistBelt: {
            doori: { type: Number, default: 0 },
            button: { type: Number, default: 0 },
          },
          canCan: { type: Number, default: 0 },
          borderAttachment: { type: String },
          skirtDesign: { type: Number, default: 0 },
        },
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
