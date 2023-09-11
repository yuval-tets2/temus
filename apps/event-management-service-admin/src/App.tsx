import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BlockList } from "./block/BlockList";
import { BlockCreate } from "./block/BlockCreate";
import { BlockEdit } from "./block/BlockEdit";
import { BlockShow } from "./block/BlockShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { BlockTransactionList } from "./blockTransaction/BlockTransactionList";
import { BlockTransactionCreate } from "./blockTransaction/BlockTransactionCreate";
import { BlockTransactionEdit } from "./blockTransaction/BlockTransactionEdit";
import { BlockTransactionShow } from "./blockTransaction/BlockTransactionShow";
import { FaucetTransactionList } from "./faucetTransaction/FaucetTransactionList";
import { FaucetTransactionCreate } from "./faucetTransaction/FaucetTransactionCreate";
import { FaucetTransactionEdit } from "./faucetTransaction/FaucetTransactionEdit";
import { FaucetTransactionShow } from "./faucetTransaction/FaucetTransactionShow";
import { BlockDailyList } from "./blockDaily/BlockDailyList";
import { BlockDailyCreate } from "./blockDaily/BlockDailyCreate";
import { BlockDailyEdit } from "./blockDaily/BlockDailyEdit";
import { BlockDailyShow } from "./blockDaily/BlockDailyShow";
import { VersionList } from "./version/VersionList";
import { VersionCreate } from "./version/VersionCreate";
import { VersionEdit } from "./version/VersionEdit";
import { VersionShow } from "./version/VersionShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { AssetDescriptionList } from "./assetDescription/AssetDescriptionList";
import { AssetDescriptionCreate } from "./assetDescription/AssetDescriptionCreate";
import { AssetDescriptionEdit } from "./assetDescription/AssetDescriptionEdit";
import { AssetDescriptionShow } from "./assetDescription/AssetDescriptionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Event Management Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Block"
          list={BlockList}
          edit={BlockEdit}
          create={BlockCreate}
          show={BlockShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="BlockTransaction"
          list={BlockTransactionList}
          edit={BlockTransactionEdit}
          create={BlockTransactionCreate}
          show={BlockTransactionShow}
        />
        <Resource
          name="FaucetTransaction"
          list={FaucetTransactionList}
          edit={FaucetTransactionEdit}
          create={FaucetTransactionCreate}
          show={FaucetTransactionShow}
        />
        <Resource
          name="BlockDaily"
          list={BlockDailyList}
          edit={BlockDailyEdit}
          create={BlockDailyCreate}
          show={BlockDailyShow}
        />
        <Resource
          name="Version"
          list={VersionList}
          edit={VersionEdit}
          create={VersionCreate}
          show={VersionShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
        <Resource
          name="AssetDescription"
          list={AssetDescriptionList}
          edit={AssetDescriptionEdit}
          create={AssetDescriptionCreate}
          show={AssetDescriptionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
