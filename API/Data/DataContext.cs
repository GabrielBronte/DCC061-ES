using System;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Data
{
    public class DataContext : IdentityDbContext<AppUser, AppRole, int,
        IdentityUserClaim<int>, AppUserRole, IdentityUserLogin<int>,
        IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Quiz> Quiz { get; set; }
        public DbSet<Questao> Questao { get; set; }
        public DbSet<Connection> Connections { get; set; }
        public DbSet<Pontuacao> Pontuacao { get; set; }
        public DbSet<Alternativas> Alternativas { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
/*
            builder.Entity<Questao>()
                .HasOne(x => x.Quiz)
                .WithMany(g => g.Questao)
                .HasForeignKey( x => x.QuizId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Alternativas>()
                .HasOne(x => x.Questao)
                .WithMany(g => g.Alternativas)
                .HasForeignKey( x => x.QuestaoId)
                .OnDelete(DeleteBehavior.Cascade);
*/
            builder.Entity<Group>()
                .HasMany(x => x.Connections)
                .WithOne()
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<AppRole>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();
        }
    }


}