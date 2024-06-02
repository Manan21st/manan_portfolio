import './Achievement.css';
import AchievementCard from './AchievementCard';

function Achievement(){
    return (
        <div className="achievement">
            <div className='achievement-body'>
                <h2>Achievements</h2>
                <h4>Here are the various achievements of mine and also the Certifications which I have completed. I still thrive to work more and harder.</h4>
            </div>
            <div className='achievement-cards'>
                {achievements.map((achievement)=>(
                    <AchievementCard title={achievement} description={achievementDescription(achievement)} image={achievementImage(achievement)} link={achievementLinks(achievement)} />
                ))}
            </div>
        </div>
    );
}

export default Achievement;

const achievements =['CodeChef','CodeForces','LeetCode'];

const achievementImage = (achievement)=>{
    switch(achievement){
        case 'CodeChef':
            return 'https://www.codechef.com/sites/all/themes/abessive/logo.svg';
        case 'CodeForces':
            return 'https://codeforces.org/s/28005/images/codeforces-sponsored-by-ton.png';
        case 'LeetCode':
            return 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png';
    }
}

const achievementLinks = (achievement)=>{
    switch(achievement){
        case 'CodeChef':
            return 'https://www.codechef.com/users/manan_nj';
        case 'CodeForces':
            return 'https://codeforces.com/profile/manan9346';
        case 'LeetCode':
            return 'https://leetcode.com/u/manan21st/';
    }
}

const achievementDescription = (achievement)=>{
    switch(achievement){
        case 'CodeChef':
            return 'I am rated 2* on Codechef. CodeChef is a competitive programming platform where I have solved various problems and also participated in various contests.';
        case 'CodeForces':
            return 'I am rated newbie on CodeForces. CodeForces is a competitive programming platform where I have solved various problems and also participated in various contests.';
        case 'LeetCode':
            return 'I have solved 150+ problems on LeetCode. LeetCode is platform for practicing coding problems and also for preparing for interviews.';
    }
}