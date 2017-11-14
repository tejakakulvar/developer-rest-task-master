import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {PieChart, Pie, Cell, Sector} from 'recharts';
import constants from '../common/Constants';
import TweenMax from 'gsap';
import $ from 'jquery';

const data = [{name: 'in Progress', value: 2}, {name: 'Reviewing', value: 7},
              {name: 'Group C', value: 3}, {name: 'Group D', value: 2}];


const renderProjectLabel = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 0) * cos;
  const sy = cy + (outerRadius + 0) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fontSize={12} fill="#333">{`${value} Projects`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={20} fontSize={20} textAnchor={textAnchor} fill={constants.colors.darkBrandColor}>{payload.name}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={36} textAnchor={textAnchor} fontSize={10} fill="#999">{`(Rate ${(percent * 100).toFixed(2)}%)`}</text>
    </g>
    );
};

const renderProjectActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  let topSpacing = 0;
  return (
    <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={constants.colors.textColor}>{payload.name}</text>
        <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill} />
        <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill="#6CC0E5" />
        <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius-4}
            outerRadius={outerRadius+6}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={constants.colors.brandColor}
            fillOpacity="0.4" />
        <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle + 80}
            endAngle={endAngle + 80}
            innerRadius={outerRadius + 18}
            outerRadius={outerRadius + 20}
            fill={constants.colors.brandColor}
            fillOpacity="0.4" />
        <Sector
            cx={cx}
            cy={cy}
            startAngle={270}
            endAngle={225}
            innerRadius={outerRadius + 38}
            outerRadius={outerRadius + 40}
            fill={constants.colors.brandColor} />
        <circle cx={cx-64} cy={cy+100} r={4} fill={constants.colors.darkBrandColor} stroke="none"/>
        <text x={cx-155} y={cy+120} dy={0} textAnchor="start" fill="#999" fontSize={10} >{payload.name}</text>
        <text x={cx-150} y={cy+120} dy={22} fontSize={20} textAnchor="start" fill={constants.colors.fontColor} className="project-count">{Math.floor((endAngle/360 /percent * value))} Projects</text>
        <text x={cx-150} y={cy+116} dy={60} textAnchor="start" fill="#999" fontSize={12} className="project-percent">{`(${(100 * (endAngle - startAngle)/360).toFixed(2)}%)`}</text>
        <rect x={cx-150} rx={4} y={cy+150} width={100} height={8} fill="#555" />
        <rect x={cx-150} rx={4} y={cy+150} width={(endAngle - startAngle)/360 * 100} height={8} fill={constants.colors.brandColor} className="project-precent" />
        <g className="project-list" >
        {

            props.projects.map((proj)=>{
                topSpacing += 20;
                return (
                    <text key={topSpacing} x={cx-140} y={cy+185} dy={topSpacing} textAnchor="start" fill={constants.colors.fontColor} fontSize={12} >
                        <a href="javascript:;" className="project-item">[ + ] {proj.name}</a>
                    </text>
                );
            })
        }
        </g>
    </g>
  );
};


const renderBalanceActiveShape = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;

  const textAnchor = "end"


  return (
    <g>
      <text x={cx} y={cy} dy={6} textAnchor="middle" fill={constants.colors.textColor} fontSize={12}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill} />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius+6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={constants.colors.brandColor}
        fillOpacity="0.4" />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill="#6CC0E5" />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={230}
        endAngle={170}
        innerRadius={outerRadius + 28}
        outerRadius={outerRadius + 30}
        fill={constants.colors.brandColor} />
      <circle cx={cx-74} cy={cy+12} r={4} fill={constants.colors.darkBrandColor} stroke="none"/>
      <text x={cx-90} y={cy} dy={0} textAnchor={textAnchor} fill="#999" fontSize={10} >{payload.desc}</text>
      <text x={cx-85} y={cy} dy={18} textAnchor={textAnchor} fill="#333" className="fund-amount">{(endAngle/360 /percent * value).toLocaleString('en-US',{ style: 'currency', currency: 'USD' })} USD</text>
      <text x={cx-76} y={cy} dy={50} textAnchor={textAnchor} fill="#999" fontSize={12} className="fund-percent">{`(${(100 * (endAngle - startAngle)/360).toFixed(2)}%)`}</text>
      <rect x={cx-180} rx={4} y={cy+25} width={100} height={8} fill="#555" />
      <rect x={cx-180} rx={4} y={cy+25} width={(endAngle - startAngle)/360 * 100} height={8} fill={constants.colors.brandColor} className="fund-precent" />
    </g>

  );
};

class AccountOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          projectActiveIndex: 0,
          fundActiveIndex: 0,
          fund: [],
          projects: []
        };
        this.onProjectSectorEnter = this.onProjectSectorEnter.bind(this);
        this.onFundSectorEnter = this.onFundSectorEnter.bind(this);
    }

    onProjectSectorEnter(data, index) {

        //avoid duplicate animation
        if (this.state.projectActiveIndex == index) return;

        this.setState({
          projectActiveIndex: index,
        }, ()=>{
            // anmiate the selected info for fund chart
            const el = ReactDOM.findDOMNode(this);
            let selectedData = {count: 0, percent:0}
            TweenMax.fromTo($(el).find("rect.project-precent")[0], 0.5, {width:0}, {width:data.percent * 100, ease:Power1.easeOut,onComplete: null});
            TweenMax.fromTo(selectedData, 0.5, {count: 0, percent:0}, {count:data.value, percent:data.percent, ease:Power1.easeOut, onUpdate:(data)=>{
                $(el).find('text.project-percent')[0].innerHTML = "("+ (selectedData.percent * 100).toFixed(2) +"%)";
                $(el).find('text.project-count')[0].innerHTML = Math.ceil(selectedData.count) +" Projects";
            }});
            $(el).find("g.project-list text").map((index,itemEl)=>{
                TweenMax.fromTo($(itemEl), 0.3, {x:30, opacity: 0}, {x:0, opacity:1, delay:(0.2*index), ease:Power1.easeOut,onComplete: null});
            });
        });
    }


    onFundSectorEnter(data, index) {

        //avoid duplicate animation
        if (this.state.fundActiveIndex == index) return;

        this.setState({
          fundActiveIndex: index,
        }, ()=>{
            // anmiate the selected info for fund chart
            const el = ReactDOM.findDOMNode(this);
            let selectedData = {amount: 0, percent:0}

            TweenMax.fromTo($(el).find("rect.fund-precent")[0], 0.5, {width:0}, {width:data.percent * 100, ease:Power1.easeOut,onComplete: null});
            TweenMax.fromTo(selectedData, 0.5, {amount: 0, percent:0}, {amount:data.value, percent:data.percent, ease:Power1.easeOut, onUpdate:(data)=>{
                $(el).find('text.fund-percent')[0].innerHTML = "("+ (selectedData.percent * 100).toFixed(2) +"%)";
                $(el).find('text.fund-amount')[0].innerHTML = (selectedData.amount).toLocaleString('en-US',{ style: 'currency', currency: 'USD' }) +" USD";
            }});
        });
    }



    componentWillMount() {
        this.transformData.bind(this)();
    }

    componentDidMount() {
        const el = ReactDOM.findDOMNode(this);

        // anmiate the retainer label
        let retainer = {balance: 0}
        TweenMax.fromTo(retainer, 1.5, {balance:0}, {balance:this.props.account.fund.balance, ease:Power1.easeOut, onUpdate:(data)=>{
            $(el).find('text.retainer')[0].innerHTML = (retainer.balance).toLocaleString('en-US',{ style: 'currency', currency: 'USD' }) +" USD";
        }});

        // animate menu fly in
        TweenMax.fromTo($(el).find("text.menu-invoice")[0], 0.5, {x:50, opacity: 0}, {x:0, opacity: 1, delay:0, ease:Power1.easeOut,onComplete: null});
        TweenMax.fromTo($(el).find("text.menu-add-money")[0], 0.5, {x:50, opacity: 0}, {x:0, opacity: 1, delay:.3, ease:Power1.easeOut,onComplete: null});

        // animate projects
        let projects = {total: 0}
        TweenMax.fromTo(projects, 1.5, {total:0}, {total:this.props.projects.length, ease:Power1.easeOut, onUpdate:(data)=>{
            $(el).find('text.project')[0].innerHTML = Math.ceil(projects.total)+" Projects in total";
        }});

        // animate project list
        $(el).find("g.project-list text").map((index,itemEl)=>{
            TweenMax.fromTo(itemEl, 0.3, {x:30, opacity: 0}, {x:0, opacity: 1, delay:0.5+0.2*index, ease:Power1.easeOut,onComplete: null});
        });
    }

    transformData() {
        this.state.projects = [
            {name: 'Ready to Submit', value:0, projects:[], color:'#2B36B3' },
            {name: 'In Progress', value:0, projects:[], color:'#2B6FB3' },
            {name: 'Pending Review', value:0, projects:[], color:'#2B9AB3' },
            {name: 'Finished Projects', value:0, projects:[], color:'#D99762' }
        ],

        this.state.fund = [
          {name:'Balance', desc:'Remaining Available Fund', color: '#62A1D9', value: this.props.account.fund.balance},
          {name:'Used', desc:'Used Fund in Last 7 days', color: '#D98962', value: this.props.account.fund.usedInLast7Days},
          {name:'Used', desc:'Used in Last 30 days', color: '#E89A1C', value: this.props.account.fund.usedInLast30Days},
        ]

        this.props.projects.map((proj)=>{
            switch(proj.type){
                case 'Ready to Submit':
                    this.state.projects[0].projects.push(proj);
                    this.state.projects[0].value ++;
                    break;
                case 'In Progress':
                    this.state.projects[1].projects.push(proj);
                    this.state.projects[1].value ++;
                    break;
                case 'Pending Review':
                    this.state.projects[2].projects.push(proj);
                    this.state.projects[2].value ++;
                    break;
                case 'Finished':
                    this.state.projects[3].projects.push(proj);
                    this.state.projects[3].value ++;
                    break;
            }

        })
    }

    render(){
        const fundMarginTop = 40;
        return (
            <div>
                <h1>Overview</h1>
                <PieChart width={800} height={600}>
                    <Pie
                      activeIndex={this.state.projectActiveIndex}
                      activeShape={renderProjectActiveShape}
                      onClick={this.onProjectSectorEnter}
                      data={this.state.projects}
                      labelLine={false}
                      label={renderProjectLabel}
                      dataKey="value"
                      startAngle={10}
                      endAngle={360+10}
                      cx={500}
                      cy={200}
                      innerRadius={65}
                      outerRadius={80} >
                      {
                        this.state.projects.map((entry, index) => {
                            return <Cell key={index} fill={entry.color} />;
                        })
                      }
                    </Pie>
                    <g> //header
                        <text x={400} y={20} fontSize={16}> Projects </text>
                        <text x={620} y={50} fontSize={26} textAnchor="end" className="project"> {this.props.projects.length} Projects in total </text>
                    </g>


                    <Pie
                      activeIndex={this.state.fundActiveIndex}
                      activeShape={renderBalanceActiveShape}
                      onClick={this.onFundSectorEnter}
                      data={this.state.fund}
                      dataKey="value"
                      cx={200}
                      cy={150+fundMarginTop}
                      innerRadius={30}
                      outerRadius={45} >
                      {
                        this.state.fund.map((entry, index) => {
                            return <Cell key={index} fill={entry.color} />;
                        })
                      }
                    </Pie>
                    <g> //header
                        <text x={100} y={30+fundMarginTop} fontSize={16}> Retainer </text>
                        <text x={300} y={60+fundMarginTop} fontSize={26} textAnchor="end" className="retainer"> {(this.state.fund[0].value).toLocaleString('en-US',{ style: 'currency', currency: 'USD' })} USD</text>
                    </g>
                    <g> //menu
                        <text className="menu-invoice" x={150} y={100+fundMarginTop} textAnchor="end" fontSize={14} fill={constants.colors.textColor}><a href="javascript:;"> Invoice [+] </a></text>
                        <text className="menu-add-money" x={130} y={120+fundMarginTop} textAnchor="end" fontSize={14} fill={constants.colors.textColor}><a href="javascript:;"> Add Money [+] </a></text>
                    </g>
               </PieChart>
            </div>
        );
    }
};

// DistributionMap.propTypes = {
//     countries: PropTypes.shape({})
// };



function select(state) {
    return {
        account: state.account,
        projects: state.projects.projects
    };
}

AccountOverview = connect(select)(AccountOverview);

export default AccountOverview;
