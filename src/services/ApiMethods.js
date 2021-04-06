/* eslint-disable no-console */
import Api from '@/services/Api'


export default {

    async getProjects() {
        return Api().get("/Portfolio/projects").catch(function (error) {
            return {
                name: error,
                code: 400,
                reason: "Failed to find projects"
            }
        });
    },
    async updateProjectLike(projectId, likes) {
        return Api().get("/Portfolio/projects/update/likes/?projectId=" + projectId + "&likes=" + likes).catch(function (error) {
            return {
                name: error,
                code: 400,
                reason: "Failed to find project:" + projectId
            }
        });
    },

    getApiHome() {

        return Api().get('/')
    }






}