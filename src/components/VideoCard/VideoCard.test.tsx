import { render, screen } from "@testing-library/react";
import { Video } from "types";
import { VideoCard } from ".";

const video: Video = {
  id: "aspd-sdfsdf32",
  firstName: "Jaida",
  lastName: "Harvey",
  email: "Margarita_Kihn@hotmail.com",
  imageUrl:
    "https://images.pexels.com/photos/9969071/pexels-photo-9969071.jpeg",
  thumbnailUrl:
    "https://images.pexels.com/photos/6975935/pexels-photo-6975935.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  duration: 52.532523893751204,
  likes: 5,
};

test("should render lastname", async () => {
  render(<VideoCard video={video} />);
  const label = await screen.findByText(/Harvey/);
  expect(label).toBeVisible();
});
