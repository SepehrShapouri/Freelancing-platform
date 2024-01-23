import http from "./httpServices";
export function getAllCategoriesApi(){
    return http.get("/category/list").then(({data})=>data.data)
}
export function getCategoryByIdApi(id){
    return http.get(`/category/${id}`).then(({data})=>data.data)
}