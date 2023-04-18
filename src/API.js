import axios from 'axios';
const LOGIN_USER_KEY = 'LOGIN_USER_KEY';


var baseURL;
// if (
//   process.env.REACT_APP_ENVIRONMENT &&
//   process.env.REACT_APP_ENVIRONMENT === "PRODUCTION"
// ) {
//   baseURL = process.env.REACT_APP_API_BASE_URL;
// } else
baseURL = "http://127.0.0.1:8000/";

const API_URL = 'http://127.0.0.1:8000/';



const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    config => {
        if (localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
    //////////////////////////////
    // USERS
    /////////////////////////////

    signUp = async (user_name, email, password) => {
        const savedPost = await api
            .post('/users/signup/', {
                user_name: user_name,
                email: email,
                password: password
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    signIn = async (email, password) => {
        const savedPost = await api
            .post('/users/signin/', {
                email: email,
                password: password
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    getUsers = async () => {
        const posts = await api
            .get('/users/')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return posts;
    };

    // ///////////////////////////////////////
    // Items
    // ///////////////////////////////////////

    getItems = async (size, color) => {
        let url = `/items/?size=${size}&color=${color}`;
        const items = await api
            .get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return items;
    };

    // ///////////////////////////////////////
    // Carts
    // //////////////////////////////////////

    getCarts = async () => {
        const carts = await api
            .get('/carts/')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return carts;
    };

    addCarts = async item_id => {
        const savedCart = await api
            .post('/carts/add/', {
                item: item_id,
                quantity: 1
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedCart;
    };

    updateCarts = async (cart_id, quantity, size, color) => {
        const savedCart = await api
            .put('/carts/update/' + cart_id + '/', {
                quantity: quantity,
                size: size,
                color: color
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedCart;
    };
      

    deleteCarts = async cart_id => {
        const response = await api
            .delete('/carts/delete/' + cart_id + '/')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return response;
    };

    ////////////////////////////////////////////
    // Order/Checkout
    // ////////////////////////////////////////

    orderAdd = async (params = {}) => {
        const order = await api
            .post('/orders/add/', params)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return order;
    };
    

    ///////////////////////////////////////////
    // Reference Post
    //////////////////////////////////////////

    getPosts = async () => {
        const posts = await api
            .get('/posts/')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return posts;
    };

    addPost = async (name, body, image) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('body', body);
        formData.append('image', image);
        const savedPost = await api
            .post('/posts/add/', formData)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    deletePost = async id => {
        const response = await api
            .delete('/posts/delete/' + id + '/')
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return response;
    };

    
}
  

export const createOrder = async (amount) => {
    const response = await fetch(`${API_URL}/orders/create_order/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': getCookie('csrftoken'),  // replace with your own CSRF token getter function
      },
      body: new URLSearchParams({
        'amount': amount,
      }).toString(),
    });
    const data = await response.json();
    return data.order_id;
  };
  
  // helper function to get the CSRF token from cookies
  const getCookie = (name) => {
    if (!document.cookie) {
      return null;
    }
    const xsrfCookies = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));
    if (xsrfCookies.length === 0) {
      return null;
    }
    return decodeURIComponent(xsrfCookies[0].split('=')[1]);
  };
  