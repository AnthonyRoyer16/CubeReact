interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

const headers: HeadersInit = {
  "Content-Type": "application/json",
};

const http = async (request: RequestInfo): Promise<HttpResponse<any>> => {
  try {
    const response: HttpResponse<any> = await fetch(request);
    if (response.status === 200) return response;
    const error = { status: response.status };
    throw error;
  } catch (error) {
    const status = error.status ? error.status : 500;
    throw { status: status };
  }
};

const getRequest = async (
  path: string,
  args: RequestInit = {
    method: "get",
    headers: Object.assign({}, headers, {
      Authorization: localStorage.getItem("token"),
    }),
  }
): Promise<HttpResponse<any>> => {
  return await http(new Request(path, args));
};

const postRequest = async (
  path: string,
  body: any,
  args: RequestInit = {
    method: "post",
    headers: Object.assign({}, headers, {
      Authorization: localStorage.getItem("token"),
    }),
    body: JSON.stringify(body),
  }
): Promise<HttpResponse<any>> => {
  return await http(new Request(path, args));
};

const putRequest = async (
  path: string,
  body: any,
  args: RequestInit = {
    method: "put",
    headers: Object.assign({}, headers, {
      Authorization: localStorage.getItem("token"),
    }),
    body: JSON.stringify(body),
  }
): Promise<HttpResponse<any>> => {
  return await http(new Request(path, args));
};

const deleteRequest = async (
  path: string,
  args: RequestInit = {
    method: "delete",
    headers: Object.assign({}, headers, {
      Authorization: localStorage.getItem("token"),
    }),
  }
): Promise<HttpResponse<any>> => {
  return await http(new Request(path, args));
};

export { getRequest, postRequest, putRequest, deleteRequest };
