import React from "react";
import AdminRoute from "./admin.route";
import { useSelector } from "react-redux";
import { roles } from "./roles";
import ContentwritingRoute from "./Contentwriting.route";
import PublisherRoute from "./Publisher.route";
import AdvancePublisherRoute from "./AdvancePublisher.route";
import AdvancePublisherUploadRoute from "./AdvancePublisherUpload.route";
import PublisherWriterRoute from "./PublisherWriter.route";
import ManagerRoute from "./Manager.route";
import AuthRoute from "./Auth.route";

function AppRoute(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const userStore = useSelector((store) => store.user);
  const hasUserData = user && user.data;
  const hasUserStore = userStore && userStore.isSuccess;
  if (hasUserData || hasUserStore) {
    switch (user.data.role) {
      case roles.admin:
        return <AdminRoute />;
      case roles.writer:
        // return <ContentwritingRoute />;
        return <ContentwritingRoute />;
      case roles.publisher:
        // return <PublisherRoute />;
        return <PublisherRoute />;
      case roles.advancePublisher:
        // return <AdvancePublisherRoute />;
        return <AdvancePublisherRoute />;
      case roles.advancePublisherUpload:
        // return <AdvancePublisherUploadRoute />;
        return <AdvancePublisherUploadRoute />;
      case roles.publisherWriter:
        // return <PublisherWriterRoute />;
        return <PublisherWriterRoute />;
      case roles.manager:
        // return <ManagerRoute />;
        return <AdminRoute />;
    }
  } else {
    // return <AuthRoute />;
    return <AdminRoute />;
  }
}

export default AppRoute;
