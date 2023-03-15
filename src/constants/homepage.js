import bannerImage from "../static/image/banner.jpg";
import aboutGroomImage from "../static/image/about-1.jpg";
import aboutBrideImage from "../static/image/about-2.jpg";
import firstStoryImage from "../static/image/couple-1.jpg";

const homepageConfig = {
  banner: {
    bannerImage: bannerImage,
    bannerEvent: "We are getting married"
  },
  about: {
    items: [
      {
        heading: "The Groom",
        content: "Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.",
        name: "Praveen",
        twitterLink: "",
        facebookLink: "",
        instaLink: "",
        linkdenInLink: "",
        image: aboutGroomImage
      },
      {
        heading: "The Bride",
        content: "Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.",
        name: "Supraja",
        twitterLink: "",
        facebookLink: "",
        instaLink: "",
        linkdenInLink: "",
        image: aboutBrideImage
      }
    ]
  },
  story: {
    items: [
      {
        heading: "First We Meet 1",
        date: "2015-05-25",
        content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        image: firstStoryImage
      },
      {
        heading: "First We Meet 2",
        date: "2015-05-28",
        content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        image: firstStoryImage
      },
      {
        heading: "First We Meet 3",
        date: "2015-05-30",
        content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        image: firstStoryImage
      },
      {
        heading: "First We Meet 4",
        date: "2015-06-10",
        content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        image: firstStoryImage
      }
    ]
  },
  gallery: {
    items: [
      {
        image: aboutGroomImage
      },
      {
        image: aboutGroomImage
      },
      {
        image: aboutGroomImage
      },
      {
        image: aboutGroomImage
      },
      {
        image: aboutGroomImage
      },
      {
        image: aboutGroomImage
      }
    ]
  },
  event: {
    items: [
      {
        heading: "The Reception",
        content: "123 Street, New York, USA",
        image: aboutGroomImage,
        timing: "12:00AM - 13:00PM"
      },
      {
        heading: "Wedding Party",
        content: "123 Street, New York, USA",
        image: aboutGroomImage,
        timing: "12:00AM - 13:00PM"
      }
    ]
  },
  credits: {
    members: [
      {
        name: "Full Name",
        tag: "Best Friend",
        type: "Groomsmen",
        image: aboutGroomImage
      },
      {
        name: "Full Name",
        tag: "Best Friend",
        type: "Bridesmaid",
        image: aboutBrideImage
      },
      {
        name: "Full Name",
        tag: "Best Friend",
        type: "Groomsmen",
        image: aboutGroomImage
      },
      {
        name: "Full Name",
        tag: "Best Friend",
        type: "Bridesmaid",
        image: aboutBrideImage
      },
      {
        name: "Full Name",
        tag: "Best Friend",
        type: "Groomsmen",
        image: aboutGroomImage
      },
      {
        name: "Full Name",
        tag: "Best Friend",
        type: "Bridesmaid",
        image: aboutBrideImage
      }
    ]
  }
}

export default homepageConfig;