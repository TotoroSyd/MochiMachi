// import linkedin_logo from "../media/linkedin logo_icon.svg";
// import medium_logo from "../media/medium logo_icon.svg";
import github_icon from "../media/github_repository_icon.svg";

export default function Footer() {
  return (
    <div className="py-8 w-full">
      <p className="text-center">Created by Phoebe Nguyen</p>
      <div className="flex flex-row gap-4 justify-center h-10 my-4">
        <a href="github.com/TotoroSyd" className="h-full">
          <img
            src={github_icon}
            alt="github logo linked to Phoebe's github"
            height="45"
            width="45"
          />
        </a>
        {/* <a href="linkedin.com/in/phoebenguyenn" className="h-full">
          <img
            src={linkedin_logo}
            alt="linkedin logo linked to Phoebe's linkedin profile"
            className="h-full"
          />
        </a> */}
        {/* <a href="phoebephuongnguyen.medium.com/" className="h-full">
          <img
            src={medium_logo}
            alt="phoebe's medium blog"
            className="h-full"
          />
        </a> */}
      </div>
    </div>
  );
}
