#Used for testing on GCP

FROM nginx

COPY nginx-docker.conf /etc/nginx/nginx.conf

COPY . /usr/share/nginx/html 

