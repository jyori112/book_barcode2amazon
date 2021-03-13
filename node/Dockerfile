FROM node:latest

ARG USER="jin"
ARG HOMEDIR="/home/jin"
ARG WORKDIR="${HOMEDIR}/app"
ARG DISTDIR="${HOMEDIR}/dist"

RUN useradd ${USER} -m -d ${HOMEDIR}

WORKDIR ${WORKDIR}
RUN mkdir -p ${DISTDIR} && chown -R ${USER}:${USER} ${DISTDIR} ${WORKDIR}

USER ${USER}

COPY --chown=${USER} package-lock.json .
COPY --chown=${USER} package.json .

RUN npm install

COPY --chown=${USER} . .

ENV PATH=$PATH:${WORKDIR}/node_modules/.bin

CMD ["webpack"]
