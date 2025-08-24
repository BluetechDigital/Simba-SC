"use client";

// Imports
import { FC } from "react";
import { client } from "@/config/apollo";
import { IApollo } from "@/context/types/context";
import { ApolloProvider } from "@apollo/client/react";

const ApolloContextProvider: FC<IApollo.IContextProvider> = ({children}) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloContextProvider;
