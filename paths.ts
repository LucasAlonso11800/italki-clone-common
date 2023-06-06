export const BASE_URL = 'https://cls9taco80.execute-api.us-west-2.amazonaws.com'
export const PATHS = {
    auth: {
        generate_access_token: 'auth/generate',
        verify_access_token: 'auth/verify',
        generate_refresh_token: 'auth/generate-refresh',
        verify_refresh_token: 'auth/verify-refresh'
    },
    services: 'services',
    signin: {
        student: 'signin/student',
        teacher: 'signin/teacher'
    },
    signup: {
        student: 'signup/student',
        teacher: 'signup/teacher'
    },
}