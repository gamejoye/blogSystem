export const baseUrl = 'http://localhost:8080/MyBlog/';

export const map = [
    'home',
    'titles',
    'logout'
]

export function mapToindex(str) {
    switch (str) {
        case '/':
            return 0;
        case 'titles':
            return 1;
        default:
            return 2;
    }
}

