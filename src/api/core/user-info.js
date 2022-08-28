import request from "@/utils/request";

export default {
  lock(id, status) {
    return request({
      url: `/admin/core/userInfo/lock/${id}/${status}`,
      method: "put",
    });
  },
  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/core/userInfo/list/${page}/${limit}`,
      method: "get",
      params: searchObj,
    });
  },
};
