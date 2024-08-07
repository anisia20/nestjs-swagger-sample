import {ResultResponse} from "../dto/result-response";

export class Def{
    //성공
    public static R_100 = {"code": 100, "desc": "성공"}

    //정보
    public static R_201 = {"code": 201, "desc": "인증 실패"};
    public static R_202 = {"code": 202, "desc": "패스워드 오류"};

    public static R_301 = {"code": 301, "desc": "도메인 조회 실패"};

    //기타
    public static R_900 = {"code": 900, "desc": "DB 오류"}
    public static R_901 = {"code": 901, "desc": "에어테이블 등록 실패"}
    public static R_etc = {"code": 999, "desc": "기타"}

    static async success(result: ResultResponse) {
        result.status = Def.R_100.code
        result.desc = Def.R_100.desc
    }

    static async successData(result: ResultResponse, data) {
        result.status = Def.R_100.code
        result.desc = Def.R_100.desc
        result.data = data
    }

    static async fail(result: ResultResponse, code) {
        result.status = code.code
        result.desc = code.desc
    }

    static async failData(result: ResultResponse, code, data) {
        result.status = code.code
        result.desc = code.desc
        result.data = data
    }
}