/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },
  //Auth
  'post /login': 'AuthController.login',
  'post /register': 'AuthController.register',
  '/logout': 'AuthController.logout',
  '/retorna_assessor_qtd': 'AuthController.retorna_assessor_qtd',

  // Comissionamento proc 
  'get /valida_comissionamento': 'ComissionamentoController.valida_comissionamento',
  'post /insert_arquivo': 'ComissionamentoController.insert_arquivo',

  // movimentação
  'get /calcula_movimentacao': 'MovimentacaoController.calcula_movimentacao',
  'get /calcula_aporte': 'MovimentacaoController.calcula_aporte',
  'get /retorna_total_movimentacao': 'MovimentacaoController.retorna_total_movimentacao',
  'get /retorna_total': 'MovimentacaoController.retorna_total',
  'get /limite_movimentacao': 'MovimentacaoController.limite_movimentacao',
  'get /retorna_cliente': 'MovimentacaoController.retorna_cliente',
  'get /grafico_valor_escritorio': 'MovimentacaoController.grafico_valor_escritorio',
  'get /grafico_assessor': 'MovimentacaoController.grafico_assessor',

  // cliente
  'get /vw_cliente_sintetico': 'ClienteController.vw_cliente_sintetico',
  'get /retorna_cliente_qtd': 'ClienteController.retorna_cliente_qtd'
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
