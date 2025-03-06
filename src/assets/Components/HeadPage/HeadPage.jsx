import Menu from "./MenuButton.jsx";
import HeadButtons from "./HeadButtons.jsx";
import "../../Styles/HeadPage.css";

const checkRoute = () => {};

function HeadPage() {
  return (
    <>
      <div id="HeadPage">
        <Menu />
        <a href="/Home">
          <img
            className="logo"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2019%2F05%2Fthe-new-york-times-logo-1.png&f=1&nofb=1&ipt=588a6e515b378e0cdbe23e86d23675e115ae85026003bc82c64060b45096c0de&ipo=images"
            alt="logo"
          />
        </a>
        <HeadButtons />
      </div>
    </>
  );
}

export default HeadPage;
