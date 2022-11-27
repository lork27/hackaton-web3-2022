import { AspectRatio } from "@mantine/core";

export default function HomePage() {
  return (
    <AspectRatio ratio={16 / 8}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314562.0940041943!2d-66.5255561876427!3d18.209551633931955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0296261b92a7f9%3A0xf336ec2818049b1a!2sPuerto%20Rico!5e0!3m2!1sen!2spr!4v1669556052561!5m2!1sen!2spr"></iframe>
    </AspectRatio>
  );
}
