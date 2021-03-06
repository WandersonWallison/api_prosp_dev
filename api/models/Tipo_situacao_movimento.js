/**
 * Tipo_situacao_movimento.js
 * @author :: Ailton Souza.
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    descricao: {
      type: 'string' , required: true , unique: true
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },
    movimentacoes: {
      collection: 'movimentacao',
      via: 'id_situacao_movimento'
    }
  },

};

