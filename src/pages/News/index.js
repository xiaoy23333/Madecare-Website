import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import styles from './index.module.scss';
import Link from '../../components/Link';
import { loadNews, pickNews, resolveImg, isEnPath } from '../../data/news';

export default class News extends React.Component {
	state = { newsData: null };

	componentDidMount() {
		document.title = "冀德远健官网";
		const meta = document.createElement('meta');
		meta.content = 'never';
		meta.name = 'referrer';
		console.log(document.getElementsByTagName('head'))
		document.getElementsByTagName('head')[0].appendChild(meta);
		// 远健动态:远程数据加载成功后刷新(失败则维持内置数据)
		loadNews().then(data => {
			if (data) this.setState({ newsData: data });
		});
	}

	render() {
		const locale = isEnPath() ? 'en' : 'zh';
		const newsList = pickNews(this.state.newsData, locale);
		return (
			<div style={{overflow: 'auto',paddingTop: '65px'}}>
				<div className={styles.banner} style={{
					background: `url(${require('../../assets/imgs/News/banner.png').default}) no-repeat`,
					backgroundSize: '100% auto'
				}}>
					<div>智能·老人·健康</div>
				</div>
				<div className={styles.dynamic}>
					<div className={styles.dynamic_header}>
						<h2 className={styles.title}>远健动态</h2>
						<Breadcrumb location={this.props.location}/>
					</div>
					<div className={styles.media_main}>
						{newsList.map((n, i) =>
							<div className={styles.media} key={n.id + i}>
								<div className={styles.media_left}><Link to={`/news/newsdetail#${n.id}`}><img className={styles.media_object} src={resolveImg(n.src)}/></Link>
								</div>
								<div className={styles.media_body}><Link to={`/news/newsdetail#${n.id}`}><h4 className={styles.media_head}>
									{n.title}</h4>
									<p className={styles.time}>{n.time}</p>
									<p className={styles.content}>{n.cnt}</p>
									<span className={styles.particulars}>了解详情 ></span></Link></div>
								<hr className={styles.hr}/>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
