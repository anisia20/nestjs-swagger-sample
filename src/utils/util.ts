import * as bcrypt from 'bcrypt';
export const getYmd = (daysOffset: number = 0): string => {
    const today = new Date();
    // daysOffset을 이용하여 날짜 계산
    today.setDate(today.getDate() + daysOffset);

    const yyyymmdd = today.toISOString().split('T')[0].replace(/-/g, '');
    return yyyymmdd;
};

export const getDomain = (request: Request): string => {
    // 1. Host 헤더 사용
    let domain = request.headers['host'];

    // 2. Host 헤더가 없을 때 referer 또는 origin 헤더 사용
    if (!domain) {
        domain = request.headers['referer'] || request.headers['origin'];
    }

    // 3. 그래도 없을 때 전체 URL에서 추출 (이 부분은 필요 없을 수 있습니다)
    if (!domain && request.url) {
        const url = new URL(request.url, `http://${request.headers['host']}`);
        domain = url.hostname;
    }
    if (domain) {
        domain = extractDomain(domain);
    }
    return domain
};

function extractDomain(hostname: string): string {
    const parts = hostname.split('.');
    if (parts.length >= 2) {
        const domain = parts.slice(-2).join('.');
        return domain;
    }
    return hostname;
}

export const encryptPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};
