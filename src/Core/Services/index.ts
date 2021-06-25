import { getRequest, postRequest, putRequest, deleteRequest } from "./requests";

const GET = "get";
const POST = "post";
const PUT = "put";
const DELETE = "delete";

const url: any = process.env.REACT_APP_API_URL;

const fetch = async (
  method: string,
  endpoint: string,
  body?: any
): Promise<any> => {
  let response: any;
  switch (method) {
    case GET: {
      response = await getRequest(`${url}/${endpoint}`);
      break;
    }
    case POST: {
      response = await postRequest(`${url}/${endpoint}`, body);
      break;
    }
    case PUT: {
      response = await putRequest(`${url}/${endpoint}`, body);
      break;
    }
    case DELETE: {
      response = await deleteRequest(`${url}/${endpoint}`);
      break;
    }
  }
  const result = await response.json();
  return { status: response.status, body: result };
};

export { fetch };
