import React from "react";
import Link from "next/link";

import Block from '@components/block/Block';
import Container from '@components/container/Container';
import Column from "@components/column/Column";
import UserRating from "@components/user/UserRating";
import UserContainer from "@components/user/UserContainer";

import Share from '@icons/ui/share';
import Add from '@icons/ui/add';
import Like from '@icons/ui/like';

import s from "./Hero.module.scss";

function HeroRecipe ({ img, title, time, ingredients, review, children }) {
  return (
    <div className={s.hero__recipe}>
      <Block>
        <Container>
          <div className={s.container}>
            <div className={s.img__container}>
              {img}
              <div className={s.icon__container}>
                <div className={s.icon}>
                  <Share className={s.icon}/>
                </div>
                <div className={s.icon}>
                  <Add className={s.icon}/>
                </div>
                <div className={s.icon}>
                  <Like className={s.icon}/>
                </div>
              </div>
            </div>
            <div className={s.text__container}>
              <div>
              <div className={s.text__inner}>
                <h1 className={s.title}>{title}</h1>
                <UserContainer title="マイケル">
                  <UserRating rate="4.3" all="100"/>
                </UserContainer>
              </div>
              <div className={s.data__container}>
                <Column col3Fix>
                  <div className={s.data__inner}>
                    <h3 className={s.data__text}>{time}m</h3>
                    <h6 className={s.data__sub__text}>料理時間</h6>
                  </div>
                  <div className={s.data__inner}>
                    <h3 className={s.data__text}>{ingredients}</h3>
                    <h6 className={s.data__sub__text}>材料</h6>
                  </div>
                  <div className={s.data__inner}>
                    <h3 className={s.data__text}>{review}</h3>
                    <h6 className={s.data__sub__text}>レビュー数</h6>
                  </div>
                </Column>
              </div>
            </div>
          </div>
          </div>
        </Container>
      </Block>
      <hr/>
      <SubHeroRecipe/>
    </div>
  );
}

export default HeroRecipe;


function SubHeroRecipe ({  }) {
  return (
    <div className={s.sub__hero_recipe}>
      <Block>
        <Container>
          <Column col2>


          </Column>
        </Container>
      </Block>
    </div>
  );
}
