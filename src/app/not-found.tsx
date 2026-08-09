import type { Metadata } from "next";
import { site } from "core/consts/content";
import NotFoundPage from "views/not-found/NotFoundPage";

export const metadata: Metadata = {
  title: site.notFoundTitle,
};

export default function NotFound() {
  return <NotFoundPage />;
}
