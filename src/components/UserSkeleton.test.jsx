import { render, screen } from "@testing-library/react";
import UserSkeleton from "./UserSkeleton";
import { describe, expect, it } from "vitest";

describe('UserSkleton component test', () => {
    const Element = (<UserSkeleton />);
    
    it.concurrent('Image is rendering correctly', () => {
    const {container} = render(<UserSkeleton />);

    expect(container.getElementsByClassName('mx-12').length).toBe(1);
});

});



