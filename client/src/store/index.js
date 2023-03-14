import { createStore } from "vuex";

export default createStore({
    state: {
        patients:[],
        meds:[]
    },
    getters: {
        patients: (state) => {
            return state.patients;
        }
    },
    mutations: {
        SET_PATIENTS: (state, patients) => {
            state.patients = patients;
        },
        ADD_PATIENT: (state, patient) => {
            state.patients.push(patient)
        },
        DELETE_PATIENT: (state, patient) => {
            let index = state.patients.indexOf(patient);
            state.patients.splice(index, 1);
        }
    },
    actions: {
        fetchPatients: ({ commit }, payload) => {
            commit("SET_PATIENTS", payload);
        },
        addPatient: ({ commit }, payload) => {
            commit("ADD_PATIENT", payload);
        },
        deletePatient: ({commit }, payload) => {
            commit("DELETE_PATIENT", payload);
        }
    }
})