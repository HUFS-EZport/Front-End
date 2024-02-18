import { Configuration, MemberControllerApi, SportControllerApi, TeamControllerApi } from "@hufs-ezport/api-client";

const API_ROOT_URL = "http://home.rflxn.xyz:11058";

export function getDefaultConfig() {
    const config = new Configuration();
    config.basePath = API_ROOT_URL;

    return config;
}

export async function getSportList() {
    const api = new SportControllerApi(getDefaultConfig());

    const res = await api.getSports();
    return res.data;
}

export async function getTeam(id) {
    const api = new TeamControllerApi(getDefaultConfig());

    const res = await api.getTeam(id);

    return res.data;
}

export async function signUp(email, password, nickname) {
    const api = new MemberControllerApi(getDefaultConfig());
    const res = await api.signUp({
        email, password, nickname
    });

    return res.data;
}

export async function login(email, password) {
    const api = new MemberControllerApi(getDefaultConfig());
    const res = await api.login(email, password);

    return res.data;
}
