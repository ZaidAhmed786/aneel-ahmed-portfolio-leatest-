// images
// import blogImg1 from "/public/images/img/image.webp";
// import blogImg2 from "/public/images/img/XXL_height.webp";
// import blogImg3 from "/public/images/img/maxresdefault.jpg";
// import blogImg4 from "/public/images/img/30628137-6578be11bbfee.jpg";
// import blogImg5 from "/public/images/img/business-continuity.cdn.en-IN.1.png";
// import blogImg6 from "/public/images/img/i (2).webp";

import blogSingleImg1 from "/public/images/blog-details/img-1.jpg";
import blogSingleImg2 from "/public/images/blog-details/img-2.jpg";
import blogSingleImg3 from "/public/images/blog-details/img-3.jpg";
import blogSingleImg4 from "/public/images/blog-details/img-4.jpg";
import blogSingleImg5 from "/public/images/blog-details/img-5.jpg";
import blogSingleImg6 from "/public/images/blog-details/img-6.jpg";



const blogs = [
    {
        id: '1',
        title: 'Mastering Web Development in 2023',
        screens: "./images/img/image.webp" ,
        description: 'Learn the latest trends and techniques in web development to build responsive and user-friendly websites.',
        thumb:'Web Development',
        create_at: '25 Dec, 2023',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Essential Tips for Effective Web Design',
        screens: "./images/img/XXL_height.webp",
        description: 'Discover the key principles of web design that can help you create visually appealing and functional websites.',
        author: 'Konal',
        thumb:'Web Designing',
        create_at: '13 Dec,2023',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Navigating the BPO Industry: Trends and Strategies',
        screens: "./images/img/maxresdefault.jpg",
        description: 'Explore the current trends and effective strategies for success in the BPO industry.',
        thumb:'BPO Industry',
        create_at: '22 Dec,2023',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
    {
        id: '4',
        title: 'Maximizing ROI with Google Ads',
        screens:"./images/img/30628137-6578be11bbfee.jpg",
        description: 'Understand how to optimize your Google Ads campaigns to achieve the best return on investment.',
        thumb:'Google Ads',
        create_at: '13 Dec,2023',
        blogSingleImg:blogSingleImg4, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '5',
        title: 'Leveraging Meta Ads for Business Growth',
        screens: "./images/img/business-continuity.cdn.en-IN.1.png",
        description: 'Learn how to effectively use Meta Ads to reach your target audience and grow your business.',
        thumb:'Meta Ads',
        create_at: '13 Dec,2023',
        blogSingleImg:blogSingleImg5, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '6',
        title: 'Unlock Your Freelancing Potential',
        screens: "./images/services/GNHLkSzJxCY.jpg",
        description: 'Learn proven tips to build a standout profile, secure high-paying projects, and grow your freelancing career. Master Upwork and achieve long-term success!',
        thumb:'Upwork Mastery',
        create_at: '22 Dec,2023',
        blogSingleImg:blogSingleImg6,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;