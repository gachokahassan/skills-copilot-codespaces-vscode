function skillsMember() {
    const member = { name: 'Alice', skills: [] };
  
    return {
      addSkill: skill => {
        if (!member.skills.includes(skill)) member.skills.push(skill);
      },
      listSkills: () => console.log(member.skills.length ? `${member.name}'s skills: ${member.skills.join(', ')}` : `${member.name} has no skills.`),
      removeSkill: skill => {
        const index = member.skills.indexOf(skill);
        if (index > -1) member.skills.splice(index, 1);
      }
    };
  }
  
  // Example usage:
  const member = skillsMember();
  member.addSkill('JavaScript');
  member.addSkill('Python');
  member.listSkills();
  member.removeSkill('JavaScript');
  member.listSkills();
  member.removeSkill('Ruby');
  