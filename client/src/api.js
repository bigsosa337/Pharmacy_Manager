import axios from 'axios'
const url = "/api/post/"
const url1 = "/api/meds/"
const url2 = "/api/reqs/"

export default class API {
    //=======================================FOR PATIENTS=============================
    static async getAllPost() {
        const res = await axios.get(url);
        return res.data;
    }
    static async getSinglePost(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    static async addPost(post) {
        const res = await axios.post(url,post);
        return res.data;
    }
    static async updatePost(id, post) {
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
    static async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
    //=======================================FOR MEDICINE============================
    static async getAllMeds() {
        const res = await axios.get(url1);
        return res.data;
    }
    static async getSingleMed(id) {
        const res = await axios.get(`${url1}/${id}`);
        return res.data;
    }
    static async addMed(med) {
        const res = await axios.post(url1,med);
        return res.data;
    }
    static async updateMed(id, med) {
        const res = await axios.put(`${url1}/${id}`, med);
        return res.data;
    }
    static async deleteMed(id) {
        const res = await axios.delete(`${url1}/${id}`);
        return res.data;
    }
    //==========================================FOR REQUESTS======================================
    static async getAllReqs() {
        const res = await axios.get(url2);
        return res.data;
    }
    static async getSingleRequest(id) {
        const res = await axios.get(`${url2}/${id}`);
        return res.data;
    }
    static async addRequest(request) {
        const res = await axios.post(url2, request);
        return res.data;
    }
    static async updateRequest(id, request) {
        const res = await axios.put(`${url2}/${id}`, request);
        return res.data;
    }
    static async deleteRequest(id) {
        const res = await axios.delete(`${url2}/${id}`);
        return res.data;
    }

}