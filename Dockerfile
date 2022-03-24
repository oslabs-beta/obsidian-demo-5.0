# instructions for postgres-db image
FROM postgres
# three native environment variables with postgres
ENV POSTGRES_USER obsidian 
ENV POSTGRES_PASSWORD codesmith
ENV POSTGRES_DB plants