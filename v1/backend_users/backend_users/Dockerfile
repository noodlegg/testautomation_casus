FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS runtime
WORKDIR /app
EXPOSE 4242
COPY --from=build-env /app/out ./
ENTRYPOINT ["dotnet", "backend_users.dll"]
