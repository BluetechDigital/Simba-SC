"use client";

// Imports
import { FC } from "react";
import {client} from "@/config/apollo";
import {ApolloProvider} from "@apollo/client";
import {IApollo} from "@/context/types/context";

const ApolloContextProvider: FC<IApollo.IContextProvider> = ({children}) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloContextProvider;
