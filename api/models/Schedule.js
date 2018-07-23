/**
 * Schedule.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    data: {
      type: 'number',
      columnType: 'datetime',
      required: true
    },
    tempo_ligacao: {
      type: 'number',
      columnType: 'datetime',
    },
    abertura: {
      type: 'number',
      columnType: 'datetime',
    },
    fechamento: {
      type: 'number',
      columnType: 'datetime',
    },
    status: {
      type: "string", isIn: ['Confirmou', 'Não atendeu', 'Ligar Novamente', 'Indefinido', 'Outros'],
    },
    office_schedule: {
      model: 'office'
    },
    obs: {
      type: 'string'
    },
    // associação com table leads / cliente um p um
    lead: {
      collection: 'leads', via: 'leads_schedule'
    },
    // associação com table manager / agente um p um
    user: {
      collection: 'user', via: 'user_schedule'
    },
    ativo: {
      type: 'boolean', defaultsTo: true
    },

  },

};
