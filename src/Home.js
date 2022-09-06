import logo1 from "./images/logo1.png";
import ellipse16 from "./images/ellipse16.png";
import group370 from "./images/group370.png";
import group151 from "./images/group151.png";
import products from "./images/products.png";
import mvps from "./images/mvps.png";
import awards from "./images/awards.png";
import line from "./images/line.png";
import upwork from "./images/upwork.png";
import microsoft from "./images/microsoft.png";
import dipp from "./images/dipp.png";
import rating from "./images/rating.png";
import sectors from "./images/sectors.png";
import hyperledger from "./images/hyperledger.png";
import hyperledgerm from "./images/hyperledgerm.png";
import nft from "./images/nft.png";
import blockchain from "./images/blockchain.png";
import consulting from "./images/consulting.png";
import binance from "./images/binance.png";
import dapp from "./images/dapp.png";
import finallogo from "./images/finallogo.png";
import rights from "./images/rights.png";
import links from "./images/links.png";

export function Home() {
  return (
    <div className='home'>
      <div>
        <div className='home-logo'>
          <img src={logo1} alt="Logo" width="545px" height="178px" />
        </div>
        <div className='home-h'>
          <h2>Accelerating Decentralization</h2>
        </div>
        <div className='home-p'>
          <p>Supercharge your business with disruptive blockchain capabilities</p>
        </div>
        <div className='home-btn'>
          <button>CONSULT FOR FREE</button>
        </div>
      </div>
      <div className='home-second'>
        <div className="home-second-one">
          <div>
            <p>
              We at Chaincode are committed to delivering high value-driven growth with an unending quest for the new and striving for excellence is the foundation of our culture.
            </p>
            <img className="img-e" src={ellipse16} alt="ellipse16" width="209px" height="205px" />
            <img className="img-g3" src={group370} alt="group370" width="600px" height="757px" />
            <img className="img-g15" src={group151} alt="group151" width="410px" height="305px" />
          </div>
          <div className="form">
            <h1>Get In Touch</h1>
            <form>
              <label>Your Name</label>
              <input type="text" name="name" required />
              <label>Your Email</label>
              <input type="email" name="email" required />
              <label>Your Organization</label>
              <input type="text" name="organization" required />
              <label>Contact Number</label>
              <input type="number" name="contact-number" required />
              <label>Your Message</label>
              <textarea name="message" required />
              <button>SEND MESSAGE</button>
            </form>
          </div>
        </div>
        <div className="numbers">
          <img className="products" src={products} alt="products" />
          <img className="mvps" src={mvps} alt="mvps" />
          <img className="awards" src={awards} alt="awards" />
          <p className="products-p">PRODUCTS</p>
          <p className="mvps-p">MVPs</p>
          <p className="awards-p">AWARDS</p>
        </div>
        <div className="brands">
          <img className="line-1" src={line} alt="line" />
          <div className="brands-umd">
            <div>
              <img className="upwork-i" src={upwork} alt="upwork" />
              <p className="upwork-p">We are top rated with 100% job success rate on Upwork.</p>
              <img className="upwork-r" src={rating} alt="rating" />
            </div>
            <div>
              <img className="microsoft-i" src={microsoft} alt="microsoft" />
              <p className="microsoft-p">Microsoft Century Program ranked our supply chain management product amongst TOP 6.</p>
              <img className="microsoft-r" src={rating} alt="rating" />
            </div>
            <div>
              <img className="dipp-i" src={dipp} alt="dipp" />
              <p className="dipp-p">Founded in 2019 we are a DIPP recognized start up.</p>
              <img className="dipp-r" src={rating} alt="rating" />
            </div>
          </div>
          <img className="line-2" src={line} alt="line" />
          <img className="sectors" src={sectors} alt="sectors" />
          <h1 className="services">SERVICES</h1>
          <p className="services-p">At Chaincode, we are committed to bringing the potential of Blockchain to every enterprise through our domain expertise and unparalleled credibility. Here is how we are helping create a better business world.</p>
          <div className="services-rows">
            <div className="services-row1">
              <div>
                <img className="hyperledger" src={hyperledger} alt="hyperledger" />
                <img className="hyperledgerm" src={hyperledgerm} alt="hyperledgerm" />
                <p className="hyperledger-p">Hyperledger Fabric Development</p>
              </div>
              <div>
                <img className="nft" src={hyperledger} alt="nft" />
                <img className="nftm" src={nft} alt="nft" />
                <p className="nft-p">Non Fungible Tokens</p>
              </div>
              <div>
                <img className="blockchain" src={hyperledger} alt="blockchain" />
                <img className="blockchainm" src={blockchain} alt="blockchain" />
                <p className="blockchain-p">DevOps Blockchain Enterprise</p>
              </div>
            </div>
            <div className="services-row2">
              <div>
                <img className="consulting" src={hyperledger} alt="consulting" />
                <img className="consultingm" src={consulting} alt="consulting" />
                <p className="consulting-p">Blockchain Consulting</p>
              </div>
              <div>
                <img className="binance" src={hyperledger} alt="binance" />
                <img className="binancem" src={binance} alt="binance" />
                <p className="binance-p">Binance Smart Chain</p>
              </div>
              <div>
                <img className="dapp" src={hyperledger} alt="dapp" />
                <img className="dappm" src={dapp} alt="dapp" />
                <p className="dapp-p">Dapp Development</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div>
            <img className="finallogo" src={finallogo} alt="finallogo" />
            <img className="rights" src={rights} alt="finallogo" />
          </div>
          <div>
            <p className="follow">Follow us </p>
            <img className="links" src={links} alt="finallogo" />
          </div>
        </div>
      </div>
    </div>
  );
}
