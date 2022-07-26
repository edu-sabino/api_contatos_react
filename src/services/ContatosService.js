/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

//Feito passo-a-passo acompanhando a playlist enviada pelo senhor//
import axios from "axios";
export default class ContatosService {
  constructor() {
    this.urlApi = "http://localhost:3000/api/contatos";
  }

  findAdll() {
    return axios.get(this.urlApi);
  }

  findById(id) {
    return axios.get(`${this.urlApi}/${id}`);
  }

  delete(id) {
    return axios.delete(`${this.urlApi}/${id}`);
  }

  save(contato) {
    return axios.post(this.urlApi, contato);
  }

  update(contato) {
    return axios.put(`${this.urlApi}/${contato.id}`, contato);
  }
}
