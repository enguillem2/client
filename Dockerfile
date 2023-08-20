FROM node:18 as BUILD_IMAGE
WORKDIR /app/react-app
COPY package.json .
RUN npm i
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
RUN npm run build


FROM node:18 as PRODUCTION_IMAGE
WORKDIR /app/react-app

COPY --from=BUILD_IMAGE /app/react-app/dist /app/react-app/dist/