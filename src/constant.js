export const baseUrl = 'http://localhost:8080/MyBlog/';
export const Urlnp = 'http://localhost:8080/';

export const map = {
    '主页':'home',
    '标题':'titles',
    '个人资料':'about',
    '退出':'logout',
}

export function mapToindex(str) {
    switch (str) {
        case '/':
            return 0;
        case 'titles':
            return 1;
        case 'aboutme':
            return 2;
        default:
            return 3;
    }
}

