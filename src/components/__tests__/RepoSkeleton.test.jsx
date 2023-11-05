import { render,screen } from "@testing-library/react";
import { expect, test } from "vitest";
import RepoSkeleton from "../RepoSkeleton";

test("should load RepoSkeleton us component",()=>{
  render(<RepoSkeleton/>)
 const heading= screen.getAllByRole("heading")
 expect(heading).toBeInTheDocument()
})