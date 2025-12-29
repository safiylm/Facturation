using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Facturation.Migrations
{
    public partial class AddDevisModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Informations",
                table: "Facture",
                newName: "Type");

            migrationBuilder.AddColumn<string>(
                name: "NumeroTVA",
                table: "User",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "RaisonSocial",
                table: "User",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "SIRET",
                table: "User",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<double>(
                name: "TVA",
                table: "Produit",
                type: "float",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<double>(
                name: "Quantite",
                table: "Produit",
                type: "float",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<double>(
                name: "PrixUnitaireHT",
                table: "Produit",
                type: "float",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<double>(
                name: "TotalTVA",
                table: "Facture",
                type: "float",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<double>(
                name: "TotalHT",
                table: "Facture",
                type: "float",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AddColumn<string>(
                name: "Remarques",
                table: "Facture",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Facture",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "AuteurId",
                table: "Client",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "NumeroTVA",
                table: "Client",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "RaisonSocial",
                table: "Client",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "SIRET",
                table: "Client",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Devis",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClientId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Titre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TotalTVA = table.Column<double>(type: "float", nullable: false),
                    TotalHT = table.Column<double>(type: "float", nullable: false),
                    Validite = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Remarques = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Devis", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Devis");

            migrationBuilder.DropColumn(
                name: "NumeroTVA",
                table: "User");

            migrationBuilder.DropColumn(
                name: "RaisonSocial",
                table: "User");

            migrationBuilder.DropColumn(
                name: "SIRET",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Remarques",
                table: "Facture");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Facture");

            migrationBuilder.DropColumn(
                name: "AuteurId",
                table: "Client");

            migrationBuilder.DropColumn(
                name: "NumeroTVA",
                table: "Client");

            migrationBuilder.DropColumn(
                name: "RaisonSocial",
                table: "Client");

            migrationBuilder.DropColumn(
                name: "SIRET",
                table: "Client");

            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Facture",
                newName: "Informations");

            migrationBuilder.AlterColumn<float>(
                name: "TVA",
                table: "Produit",
                type: "real",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AlterColumn<float>(
                name: "Quantite",
                table: "Produit",
                type: "real",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AlterColumn<float>(
                name: "PrixUnitaireHT",
                table: "Produit",
                type: "real",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AlterColumn<float>(
                name: "TotalTVA",
                table: "Facture",
                type: "real",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AlterColumn<float>(
                name: "TotalHT",
                table: "Facture",
                type: "real",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");
        }
    }
}
