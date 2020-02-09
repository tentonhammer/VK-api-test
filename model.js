const VK = window.VK;

export default {
    /**
     * Метод авторизациия в VK
     * @param apiId ID приложения
     * @param perms Разрешения, запрашиваемые у пользователя
     */
    login(apiId, perms) {
        console.log('apiId: ', apiId);
        return new Promise((resolve, reject) => {
            VK.init({
                apiId: apiId
            });

            VK.Auth.login(response => {
                if (response.session) {
                    resolve(response);
                } else {
                    reject(new Error('Не удалось авторизоваться'));
                }
            }, perms);
        });
    },
    /**
     * Вызов API VK
     * @param method Вызываемый метод
     * @param params Передаваемые параметры
     * @returns {Promise<any>}
     */
    callApi(method, params) {
        params.v = params.v || '5.78';

        return new Promise((resolve, reject) => {
            VK.api(method, params, response => {
                if (response.error) {
                    reject(new Error(response.error.error_msg));
                } else {
                    resolve(response);
                }
            });
        });
    },
    /**
     * Получение пользователей
     * @param params Передаваемые параметры
     * @returns {*|Promise<any>}
     */
    getUser(params = {}) {
        return this.callApi('users.get', params);
    }
}