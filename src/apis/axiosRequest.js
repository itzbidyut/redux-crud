import axios from "axios";

export async function AxiosRequest(url, method, header, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: header,
        data: params,
        timeout: 1000,
      })
    : axios({
        url: url,
        method: method,
        headers: header,
        data: {},
        timeout: 1000,
      });
}

export const GetApiDetails = () => {
  const header = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:3000/details", "GET", header, {});
};

export const PostApiDetails = (data) => {
  const header = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:3000/details", "POST", header, data);
};

export const updateDetailsApiDetails = (data, id) => {
  const header = {
    "Content-Type": "application/json",
  };
  return AxiosRequest(
    `http://localhost:3000/details/${id}`,
    "PUT",
    header,
    data
  );
};

export const deleteDetailsApiDetails = (id) => {
  const header = {
    "Content-Type": "application/json",
  };
  return AxiosRequest(
    `http://localhost:3000/details/${id}`,
    "DELETE",
    header,
    {}
  );
};
