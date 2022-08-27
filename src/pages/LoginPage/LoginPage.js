import "../LoginPage/stylesLogin.css";

import { Input } from "../../components/Input";
import { Titles } from "../../components/Titles";
import { Button } from "../../components/Button";
import { Button2 } from "../../components/Button2";
import { Icons } from "../../components/Icons";
import { IconsButton } from "../../components/IconsButton";

import { useState } from "react";

import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import logo from "../../assets/logo.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="container">
      <div className="container-bg">
        <div className="bg-left">
          <div className="login-box-left">
            <div className="login-page-left">
              <div className="site-name">
                <Titles title="DreamRoll" />
              </div>
              <div className="logo">
                <Icons img={logo} />
              </div>
              <div className="login-msg-left">
                <Titles title="Welcome back!" />
              </div>
              <div className="login-msg-left2">
                <Titles
                  title="This site is made for rpg fans in order to 
                facilitate the players experience, help us 
                to spread the word by sharing the site with your friends!"
                />
              </div>
              <div className="box-social">
                <Titles title="Social Media" />
              </div>
              <div className="icons-button-social-media">
                <IconsButton img={instagram} />
                <IconsButton img={twitter} />
                <IconsButton img={youtube} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-right">
          <div className="login-box-right">
            <div className="login-page-right">
              <div className="login-msg">
                <Titles title="Hallo!" />
              </div>
              <div className="login-title">
                <Titles title="Login your account" />
              </div>
              <div className="login-input">
                <Input
                  type="email"
                  label="Email:"
                  value={email}
                  onChange={setEmail}
                />

                <Input
                  type="senha"
                  label="Senha:"
                  value={senha}
                  onChange={setSenha}
                />
              </div>
              <div className="btn-login">
                <Button text="Login" />
              </div>
            </div>
            <div className="btn-create-account">
              <Button2 text="Create Account" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
