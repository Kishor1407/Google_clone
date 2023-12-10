import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyC6OG8T0OxPUjN9xKTlyY-_JFuKR29Ntsk",
    cx: "27a93b07612df4775",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
