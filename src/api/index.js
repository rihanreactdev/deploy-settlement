import { axiosInstance } from "../apiWrapper";

export const loginApi = async (payload) => {
    const { data } = await axiosInstance.put(`/v1/login`, payload);

    return data;
};

export const registerApi = async (payload) => {
    const { data } = await axiosInstance.put(`/v1/signup`, payload);

    return data;
};

export const confirmOTPApi = async (payload) => {
    const { data } = await axiosInstance.put(`/v1/reset-password`, payload);

    return data;
};

export const forgotPasswordApi = async (payload) => {
    const { data } = await axiosInstance.put(`/v1/forgot-password`, payload);

    return data;
};

export const neutraLoginApi = async (payload) => {
    const { data } = await axiosInstance.put(`/neutrals/v1/login`, payload);

    return data;
};

export const neutralForgotPasswordApi = async (payload) => {
    const { data } = await axiosInstance.put(`/neutral/v1/forgot-password`, payload);

    return data;
};

export const neutralConfirmOTPApi = async (payload) => {
    const { data } = await axiosInstance.put(`/neutral/v1/reset-password`, payload);

    return data;
};

export const registerCaseApi = async (payload) => {
    const { data } = await axiosInstance.post(`/v1/case_files`, payload);

    return data;
};

export const getAllCaseFilesApi = async () => {
    const { data } = await axiosInstance.get(`/v1/case_files`);

    return data;
};
